import { useLoaderData, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyEnrollClassDetails = () => {
    const loader = useLoaderData()
    console.log(loader)
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const { data: classDetails = [] } = useQuery({
        queryKey: ['classDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${id}`)
            return res.data
        }
    })
    return (
        <div>
            <h1>{classDetails.title}</h1>
        </div>
    );
};

export default MyEnrollClassDetails;