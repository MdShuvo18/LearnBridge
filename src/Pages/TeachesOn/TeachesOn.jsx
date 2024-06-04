import Navbar from "../Home/Navbar";


const TeachesOn = () => {
    const handleTeach=()=>{

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <img src="https://i.ibb.co/nr756wC/wonderlane-b9-od-Qi5o-Do-unsplash.jpg" alt="" />
               
               {/* form section */}
                <div className="bg-[#F4F3F0] p-24">
                    <h2 className="text-3xl font-extrabold text-center">Apply For Teaching</h2>
                    <form onSubmit={handleTeach}>
                        {/* form name and quantity row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="image" placeholder="img URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <select name="title" className="input input-bordered w-full ">
                                <option value="Advanced JavaScript">Advanced JavaScript</option>
                                <option value="Photography for Beginners">Photography for Beginners</option>
                                <option value="Introduction to Python">Introduction to Python</option>
                                <option value="Machine Learning A-Z">Machine Learning A-Z</option>
                                <option value="Graphic Design Masterclass">Graphic Design Masterclass</option>
                                <option value="Excel for Professionals">Excel for Professionals</option>
                                <option value="Digital Marketing Essentials">Digital Marketing Essentials</option>
                            </select>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select name="category" className="input input-bordered w-full ">
                                <option value="Web Development">Web Development</option>
                                <option value="Photography for Beginners">Photography for Beginners</option>
                                <option value="Introduction to Python">Introduction to Python</option>
                                <option value="Machine Learning A-Z">Machine Learning A-Z</option>
                                <option value="Graphic Design Masterclass">Graphic Design Masterclass</option>
                                <option value="Excel for Professionals">Excel for Professionals</option>
                                <option value="Digital Marketing Essentials">Digital Marketing Essentials</option>
                            </select>
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Experience</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="experience" placeholder="Experience" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                   
                        <input type="submit" value="Apply" className="btn btn-block" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeachesOn;