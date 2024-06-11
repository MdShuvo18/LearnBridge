import { CgProfile } from "react-icons/cg";
import { FaHome, FaRegQuestionCircle, FaUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTeacher from "../Hooks/useTeacher";
import { MdAddCircleOutline } from "react-icons/md";


const Dashbord = () => {
    const [isAdmin] = useAdmin()
    const [isTeacher] = useTeacher()
    // console.log(isAdmin)
    // console.log(isTeacher)
    return (
        <div className="flex">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    Home</NavLink>
                                <NavLink to="/dashbord/teacherrequest">
                                    <FaRegQuestionCircle></FaRegQuestionCircle>
                                    Teacher Request</NavLink>
                                <NavLink to="/dashbord/users">
                                    <FaUser></FaUser>
                                    Users</NavLink>
                                <NavLink to="/">
                                    <SiGoogleclassroom />
                                    All classes</NavLink>
                                {/* <NavLink to="/dashbord/myenrollclass">
                            <SiGoogleclassroom />
                            My enroll class</NavLink> */}
                                <NavLink to="/dashbord/myprofile">
                                    <CgProfile />
                                    Profile</NavLink>
                            </li>
                        </>
                            : (isTeacher
                                ?
                                <div>
                                    <NavLink className='flex justify-items-center gap-2' to="/dashbord/addclasses">
                                        <MdAddCircleOutline />
                                        Add class</NavLink>
                                    <NavLink className='flex justify-items-center gap-2' to="/dashbord/myclass">
                                        <SiGoogleclassroom />
                                        My class</NavLink>
                                    <NavLink className='flex justify-items-center gap-2' to="/">
                                        <CgProfile />
                                        Profile</NavLink>
                                </div>
                                :
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    Home</NavLink>)

                    }
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="w-64 min-h-screen bg-sky-200">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        Home</NavLink>
                                    <NavLink to="/dashbord/teacherrequest">
                                        <FaRegQuestionCircle></FaRegQuestionCircle>
                                        Teacher Request</NavLink>
                                    <NavLink to="/dashbord/users">
                                        <FaUser></FaUser>
                                        Users</NavLink>
                                    <NavLink to="/dashbord/allclasses">
                                        <SiGoogleclassroom />
                                        All classes</NavLink>
                                    {/* <NavLink to="/dashbord/myenrollclass">
                            <SiGoogleclassroom />
                            My enroll class</NavLink> */}
                                    <NavLink to="/dashbord/myprofile">
                                        <CgProfile />
                                        Profile</NavLink>
                                </li>
                            </>
                                : (isTeacher
                                    ?
                                    <div>
                                        <NavLink className='flex justify-items-center gap-2' to="/dashbord/addclasses">
                                            <MdAddCircleOutline />
                                            Add class</NavLink>
                                        <NavLink className='flex justify-items-center gap-2' to="/dashbord/myclass">
                                            <SiGoogleclassroom />
                                            My class</NavLink>
                                        <NavLink className='flex justify-items-center gap-2' to="/dashbord/myprofile">
                                            <CgProfile />
                                            Profile</NavLink>
                                        <NavLink className='flex justify-items-center gap-2' to="/">
                                           <FaHome></FaHome>
                                            Home</NavLink>
                                    </div>
                                    :
                                    <div>
                                        <NavLink className='flex justify-items-center gap-2' to="/dashbord/myenrollclass">
                                            <FaHome></FaHome>
                                            My Enroll Class</NavLink>
                                        <NavLink className='flex justify-items-center gap-2' to="/dashbord/myprofile">
                                            <CgProfile />
                                            Profile</NavLink>
                                            <NavLink className='flex justify-items-center gap-2' to="/">
                                           <FaHome></FaHome>
                                            Home</NavLink>
                                    </div>)

                        }
                    </ul>
                </div>
            </div>



            <div className="flex-1 p-20">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;