import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";


const Dashbord = () => {
    return (
        <div className="flex">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                        <NavLink to="/dashbord/myenrollclass">
                            <SiGoogleclassroom />
                            My enroll class</NavLink>
                        <NavLink to="/dashbord/studentprofile">
                            <CgProfile />
                            Profile</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="w-64 min-h-screen bg-sky-200">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold">
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                            <NavLink to="/dashbord/myenrollclass">
                                <SiGoogleclassroom />
                                My enroll class</NavLink>
                            <NavLink to="/dashbord/studentprofile">
                                <CgProfile />
                                Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;