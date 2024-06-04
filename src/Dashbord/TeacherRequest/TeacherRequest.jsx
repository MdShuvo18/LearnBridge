import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure()
    const [disable,setDisable]=useState(null)
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/applyteaches')
            return res.data
        }
    })

    const handleAppored = (user) => {
        axiosSecure.patch(`/applyteaches/teacher/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    setDisable(user._id)
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is Teacher Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleReject = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/applyteaches/teacher/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your request has been rejected",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Category </th>
                            <th>Expericence </th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            requests.map((request, index) => <tr key={request._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={request.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{request.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {request.title}
                                </td>
                                <td>
                                    {request.category}
                                </td>
                                <td>
                                    {request.experience}
                                </td>
                                <td>{request.role === 'teacher' ? 'Accepted' : 'Pending...'}</td>
                                <th>
                                    <button onClick={() => handleAppored(request)} className="btn btn-outline btn-ghost btn-xs" disabled={disable===request._id}>Appored</button>
                                    <button onClick={() => handleReject(request)} className="btn btn-outline btn-ghost btn-xs" disabled={disable===request._id}>Reject</button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default TeacherRequest;