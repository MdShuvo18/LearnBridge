import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllClasses from "../Pages/AllClasses/AllClasses";
import PrivateRoutes from "./PrivateRoutes";
import Dashbord from "../Dashbord/Dashbord";
import MyEnrollClass from "../Dashbord/Student/MyEnrollClass";
import StudentProfile from "../Dashbord/Student/StudentProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/allclasses',
                element:<PrivateRoutes><AllClasses></AllClasses></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element:<Register></Register>
            
            }
        ]
    },
    {
        path:'/dashbord',
        element:<Dashbord></Dashbord>,
        children:[

            // student related routes
            {
               path:'/dashbord/myenrollclass',
               element:<MyEnrollClass></MyEnrollClass> 
            },
            {
                path:'/dashbord/studentprofile',
                element:<StudentProfile></StudentProfile>
            }
        ]
    }
]);

export default router;