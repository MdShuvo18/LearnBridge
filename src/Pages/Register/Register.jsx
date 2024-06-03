import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { IoEye, IoLogoGoogle } from "react-icons/io5";
import { IoLogoGithub, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {

    const auth = getAuth(app)
    const googleprovider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [register, setRegister] = useState('');
    const [success, setSuccess] = useState('');
    const [showPasswords, setShowPasswords] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()


    const handleGoogleSignIn = () => {
        // e.preventDefault()
        signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                navigate(location?.state ? location.state : '/')
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const handleGithubSignIn = () => {
        // e.preventDefault()
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(email)
        setRegister('');
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
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photo)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = { name: name, email: email };
                        axiosPublic.post('/user', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
        // console.log(name, email, password, photo)
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Full Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo" name='photo' className="input input-bordered" required />
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
                                <input type="submit" value='sign up' className="btn btn-primary" />
                            </div>
                        </form>

                        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full mb-2">
                            <IoLogoGoogle></IoLogoGoogle>
                            <span className="ml-2">Sign Up With Google</span>
                        </button>
                        <button onClick={handleGithubSignIn} className="btn btn-outline w-full">

                            <IoLogoGithub></IoLogoGithub>
                            <span className="ml-2">Sign Up With Github</span>
                        </button>
                        <p className="p-4 text-center mt-3">Already have an account? <Link to='/login' className="text-blue-700">Login</Link></p>
                        {
                            register && <p className="text-lg text-center text-red-700">{register}</p>
                        }
                        {

                            success && <p className="text-lg text-center text-green-700">{success}</p>
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;