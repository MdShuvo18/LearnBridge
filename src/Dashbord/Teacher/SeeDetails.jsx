import { FaPlus } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";





const SeeDetails = () => {
    const loadSeeDetails = useLoaderData()
    const axiosSecure = useAxiosSecure()

    console.log(loadSeeDetails)

    const { data: assignment = [], refetch } = useQuery({
        queryKey: 'assignment',
        queryFn: async () => {
            const res = await axiosSecure.get('/assignmentcollection')
            console.log(res.data)
            return res.data
        }

    })

    const{data:items=[]}=useQuery({
        queryKey:'items',
        queryFn:async()=>{
            const res=await axiosSecure.get('/assignmentsubmitcollection')
            console.log(res.data)
            return res.data
        }
    })

    // const { data: enroll = [] } = useQuery({
    //     queryKey: 'enroll',
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/allclass')
    //         console.log(res.data)
    //         return res.data
    //     }
    // })


    const handleAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const detail = { title: title, description: description, deadline: deadline }
        console.log(detail)

        axiosSecure.post('/assignmentcollection', detail)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged === true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Assignment Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })


    }




    return (
        <div>
            <div>
                <h1 className="text-4xl font-extrabold text-center mb-5">Class Progress Section</h1>
                <div className="grid lg:grid-cols-3 justify-items-center gap-2">
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="p-5">
                            <h2 className="card-title">Total Enrollment</h2>
                            <p className="text-lg font-bold text-center">9</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="p-5">
                            <h2 className="card-title">Total assignment</h2>
                            <p className="text-lg font-bold text-center">{assignment.length}</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="p-5">
                            <h2 className="card-title">Per day assignment submitted</h2>
                            <p className="text-lg font-bold text-center">{items.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <h1 className="text-4xl font-extrabold text-center mb-5">Class Assignment</h1>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}><FaPlus></FaPlus>Create</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <form onSubmit={handleAssignment}>
                            <div className="md:flex mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Assignment Title</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ml-4">
                                    <label className="label">
                                        <span className="label-text">Assignment Deadline</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="deadline" placeholder="Assignment Deadline" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:flex mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Assignment Description</span>
                                    </label>
                                    <textarea name="description" placeholder="Assignment Description" className="textarea textarea-bordered textarea-xs w-full " ></textarea>
                                </div>
                            </div>
                            <input type="submit" value="Add Assignment" className="btn btn-block" />
                        </form>
                        <form method="dialog" className="mt-3">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default SeeDetails;