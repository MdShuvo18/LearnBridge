import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const MyEnrollClassDetails = () => {
    const axiosSecure = useAxiosSecure()
    const loaderData = useLoaderData();
    const axiosPublic=useAxiosPublic()
    // console.log(loaderData)
    const handleSubmit = async (item) => {
        console.log(item)
        const res = await axiosSecure.post('/assignmentsubmitcollection', item)
        // console.log(res.data)
        if (res.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Submitted",
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    const handleTer=async(e)=>{
      e.preventDefault();
      const form=e.target;
      const description=form.description.value;
      const rating=form.rating.value;
      const item={description,rating}
      console.log(item)
      const res=await axiosPublic.post('/terCollection',item)
      if (res.data.insertedId) {
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
                                <td> {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>TER</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <form onSubmit={handleTer}>
                                                <div className="md:flex mb-8">
                                                    <div className="form-control w-full">
                                                        <label className="label">
                                                            <span className="label-text">Description</span>
                                                        </label>
                                                        <textarea name="description" placeholder="Description" className="textarea textarea-bordered textarea-xs w-full " ></textarea>
                                                    </div>
                                                </div>

                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text">Rating Us (out of 5)</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="rating" placeholder="Rating Us" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <input type="submit" value="Submit" className="btn btn-outline mt-3" />
                                            </form>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog></td>
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