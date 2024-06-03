import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashbord = () => {
    return (
        <div>
            <div className="w-64 min-h-screen bg-sky-200">
                <ul className="menu p-5">
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;