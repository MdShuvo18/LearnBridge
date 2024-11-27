
import { useContext, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [showPasswords, setShowPasswords] = useState(false);
    const [logUser, setLogUser] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation()
    // console.log(location)
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";


    const handleLogin = (e) => {
        e.preventDefault()
        // console.log('ok')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setLogUser('');
        setSuccess('');
        

        if (password.length < 6) {
            setSuccess(<p className="text-red-700">Password must be at least 6 characters or longer</p>);
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSuccess(<p className="text-red-700">Password must be at least one UpperCase characters</p>);
            return;
        } else if (!/[a-z]/.test(password)) {
            setSuccess(<p className="text-red-700">Password must be at least one lowerCase characters</p>);
            return;
        }

        signIn(email, password)
            .then(result => {
                toast.success("login success")
                console.log(result.user)               
                navigate(from, { replace: true });
                setSuccess('Login Successful')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input

                                    type={showPasswords ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />

                                <span className="absolute top-14 right-7" onClick={() => { setShowPasswords(!showPasswords) }}>
                                    {
                                        showPasswords ? <IoEye /> : <IoMdEyeOff />
                                    }
                                </span>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-success">Login</button>
                            </div>
                        </form>

                        {
                            logUser && <p className="text-lg text-center text-red-700">{logUser}</p>
                        }
                        {

                            success && <p className="text-lg text-center text-green-700">{success}</p>
                        }
                        <div className="text-center p-5">
                            <p>Don't have an account? <Link to="/signup"><span className="text-blue-700">Register</span></Link></p>
                        </div>
                    </div>

                </div>
                <Toaster position="top-right" autoClose="2000"></Toaster>
            </div>
           
        </div>
    );
};

export default Login;