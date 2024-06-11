import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const TotalSection = () => {
    const axiosSecure = useAxiosSecure()
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allclass')
            return res.data
        }
    })
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data
        }
    })



    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="flex justify-center items-center flex-col lg:flex-row-reverse gap-20">
                    <img src="https://i.ibb.co/KF9b6d0/melanie-deziel-f-SWQPBxq-Clg-unsplash.jpghttps://i.ibb.co/mGbCjPz/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg" className="w-96 rounded-lg shadow-2xl" />
                    <div className="">
                        <h1 className="text-5xl font-bold">Total Users: {users.length}</h1>
                        <p className="text-4xl font-bold">Total Classes : {classes.length}</p>
                        <p className="text-3xl font-bold">Total Enrollment: 10</p>
                       
                    </div>
                </div>
            </div>

            {/* <div>
                <h2>Total Classes : {classes.length}</h2>
                <h2>Total Enrollment: 10</h2>
                <h2>Total Users: {users.length}</h2>
            </div>
            <div>
                <img src="" alt="" />
            </div> */}
        </div>
    );
};

export default TotalSection;