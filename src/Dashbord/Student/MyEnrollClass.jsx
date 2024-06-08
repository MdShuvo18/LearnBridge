import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyEnrollClass = () => {
    const axiosSecure = useAxiosSecure()
    const{user}=useContext(AuthContext)
    const { data: enrollClasses = [] } = useQuery({
        queryKey: ['enrollClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment?email=${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            {enrollClasses.length}
        </div>
    );
};

export default MyEnrollClass;