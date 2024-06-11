import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const MyEnrollClassDetails = () => {
    const axiosSecure = useAxiosSecure()
    const loaderData = useLoaderData();
    // console.log(loaderData)
    const handleSubmit = async (item) => {
        console.log(item)
        const res = await axiosSecure.post('/assignmentsubmitcollection', item)
        // console.log(res.data)
        if(res.data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Submitted",
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>DeadLine</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            loaderData.map((item, index) => <tr key={item._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.deadline}</td>
                                <td><button onClick={() => handleSubmit(item)} className="btn btn-outline btn-xs">Submit</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrollClassDetails;