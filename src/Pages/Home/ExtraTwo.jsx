import Swal from "sweetalert2";


const ExtraTwo = () => {
    const handlebtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const getEmail = { email }
        console.log(getEmail);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for subscribing to our newsletter',
            showConfirmButton: false,
            timer: 2500
        })
        form.reset();
    }
    return (
        <div className="text-center space-y-3 bg-gray-100 h-64 border-2 rounded-lg">
            <div className="space-y-3 mt-10">
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-extrabold text-blue-400">Join Our Newsletter Section</h2>
                    <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/KDJk7H5/pngtree-rocket-logo-design-png-image-4032269.jpg" alt="" />
                </div>
                <p className="text-xl font-bold text-black">Subscribe to our newsletter and <span className="text-red-600">get 20%</span> off on your first purchase</p>
                <form onSubmit={handlebtn}>
                    <input className="h-8 w-56 rounded-lg" type="email" name="email" placeholder="Enter Your Email" required />
                    <button className="btn btn-outline btn-success btn-sm ml-2">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default ExtraTwo;