import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const MyEnrollClass = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: enrollClasses = [] } = useQuery({
        queryKey: ['enrollClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })


    return (
        <div className="grid grid-cols-2 gap-5 justify-items-center">
            {
                enrollClasses.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="text-lg font-semibold text-black">Posted by :{item.name}</p>
                        <div className="card-actions justify-end">
                           <Link to={`/dashbord/myenrollclassdetails/${item._id}`}>
                           <button className="btn btn-outline ">Continue</button>
                           </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyEnrollClass;