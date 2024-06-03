import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const links = <>
        <li><a><Link to='/'>Home</Link></a></li>
        <li><a><Link to='/allclasses'>All Classes</Link></a></li>
        <li><a>Teaches On LearnBridge</a></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert.success("Sign out successfully")
            })
            .catch()
    }
    return (
        <div>
            <div className="navbar fixed z-10 opacity-70 bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/9rJTxPg/simple-success-education-logo-png-32069.jpg" alt="" />
                    <a className="btn btn-ghost text-xl text-white font-semibold">LearnBridge</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className="bg-white" alt="" src={user?.photoURL} />
                            </div>
                        </div>
                        }
                        {
                            user
                                ? <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white  rounded-box w-52">
                                    <li className="text-black">
                                        <a className="justify-between">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li><Link to='/dashbord'><a>Dashboard</a></Link></li>
                                    <li><a onClick={handleLogout}>Logout</a></li>
                                </ul>
                                : <Link to='/login'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Sign In</span>
                                        <span className="relative invisible">Sign In</span>
                                    </a>
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;