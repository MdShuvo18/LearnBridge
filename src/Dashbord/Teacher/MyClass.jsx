import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MyClass = () => {
    const axiosSecure = useAxiosSecure()
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/addteachersclass')
            return res.data
        }
    })
    return (
        <div className="grid lg:grid-cols-2 gap-5 ">
            {
                classes.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}

                        </h2>
                        <p>
                            {
                                item.description.split(' ').length > 35
                                    ? item.description.split(' ').slice(0, 35).join(' ') + '...'
                                    : item.description
                            }
                        </p>
                        <div className="flex">
                            <p><span className="text-lg font-bold">Status :</span>Pending</p>
                            <p><span className="text-lg font-bold text-red-600">Price :</span>${item.price}</p>

                        </div>
                        <div className="">
                            <p><span className="text-lg font-bold">Name :</span>{item.name}</p>
                            <p><span className="text-lg font-bold">email :</span>{item.email}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/dashbord/updateclass/${item._id}`}>
                                <div className="btn btn-outline btn-success rounded-full">Update</div>
                            </Link>
                            <div className="btn btn-outline btn-error rounded-full">Delete</div>
                        </div>
                        <div className="text-center">
                            <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                See details
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyClass;


