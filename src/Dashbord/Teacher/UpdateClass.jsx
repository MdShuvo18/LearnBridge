import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateClass = () => {
    const loadClass = useLoaderData()
    const { title, image, description, price, _id } = loadClass
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const name = form.name.value;
        const email = form.email.value;
        const addClassItem = { title: title, image: image, price: price, description: description, name: name, email: email }
        // console.log(addClassItem)
        // console.log('ok')
        axiosSecure.put(`http://localhost:5000/addteachersclass/${_id}`, addClassItem)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    navigate('/dashbord/myclass')
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Update Class Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center text-fuchsia-300">Update Class</h1>
            <div>
                <form onSubmit={handleUpdate}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={title} type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={image} type="text" name="image" placeholder="img URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group ">
                                <input defaultValue={price} type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <textarea defaultValue={description} name="description" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                            </label>

                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={user?.displayName} type="text" name="name" placeholder="Name" className="input input-bordered w-full" disabled />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={user?.email} type="email" name="email" placeholder="Email" className="input input-bordered w-full" disabled />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Update" className="btn btn-block" />

                </form>
            </div>
        </div>
    );
};

export default UpdateClass;