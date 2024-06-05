import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Allclasses = () => {
    const axiosSecure = useAxiosSecure()
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/addteachersclass')
            console.log(res.data)
            return res.data
        }
    })
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
                                <th>
                                    <button className="btn btn-ghost btn-xs">Approved</button>
                                    <button className="btn btn-ghost btn-xs">Reject</button>
                                </th>
                                <th>
                                    <button className="btn btn-outline btn-success btn-xs">see progress</button>
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