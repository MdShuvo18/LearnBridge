import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";



const Allclasses = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [status, setStatus] = useState({})
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/addteachersclass')
            console.log(res.data)
            return res.data
        }
    })

    const handleApproved = (item) => {
        // console.log(item)
        const classInfo = {
            classId: item._id,
            title: item.title,
            image: item.image,
            description: item.description,
            price: parseInt(item.price),
            name: item.name,
            email: item.email
        }
        axiosPublic.post('/allclass', classInfo)
            .then(res => {
                console.log(res.data)
            })

        setStatus((prevStatus) => ({
            ...prevStatus,
            [item._id]: 'Approved'
        }))

    }

    const handleReject = (item) => {
        setStatus((prevStatus) => ({
            ...prevStatus,
            [item._id]: 'Rejected'
        }))
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
                            <th>Image</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Short Description</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>{item.email}</td>
                                <td>
                                    <textarea value={item.description} className="textarea textarea-bordered h-24" placeholder=""></textarea>
                                </td>
                                <th>{
                                    status[item._id]
                                        ?
                                        status[item._id]
                                        :
                                        <>
                                            <button onClick={() => handleApproved(item)} className="btn btn-ghost btn-xs">Approved</button>
                                            <button onClick={() => handleReject(item)} className="btn btn-ghost btn-xs">Reject</button>
                                        </>
                                }

                                </th>
                                <th>
                                    <button className="btn btn-outline btn-success btn-xs" disabled={status[item._id] !== 'Approved'}>see progress</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Allclasses;