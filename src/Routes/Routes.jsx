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
import Users from "../Dashbord/Users";
import TeachesOn from "../Pages/TeachesOn/TeachesOn";
import TeacherRequest from "../Dashbord/TeacherRequest/TeacherRequest";
import MyProfile from "../Dashbord/MyProfile/MyProfile";
import Addclasses from "../Dashbord/Teacher/Addclasses";
import MyClass from "../Dashbord/Teacher/MyClass";
import UpdateClass from "../Dashbord/Teacher/UpdateClass";
import Allclasses from "../Dashbord/Admin/Allclasses";
import EnrollBtn from "../Pages/AllClasses/EnrollBtn";
import Payment from "../Pages/AllClasses/Payment";
import SeeDetails from "../Dashbord/Teacher/SeeDetails";
import MyEnrollClassDetails from "../Dashbord/Student/MyEnrollClassDetails";





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
                path: '/allclasses',
                element: <AllClasses></AllClasses>
            },
             // payment related api
            {
                path: '/payment',
                element: <Payment></Payment>
            },
            {
                path: '/enroll/:id',
                element:<PrivateRoutes> <EnrollBtn></EnrollBtn></PrivateRoutes>,
                loader: () => fetch(`http://localhost:5000/allclass`)
            },
            {
                path: '/teachesOnLearnBridge',
                element: <TeachesOn></TeachesOn>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>

            }
        ]
    },
    {
        path: '/dashbord',
        element: <Dashbord></Dashbord>,
        children: [
            // admin related routes

            {
                path: '/dashbord/users',
                element: <Users></Users>
            },
            {
                path: '/dashbord/teacherrequest',
                element: <TeacherRequest></TeacherRequest>
            },
            {
                path: '/dashbord/allclasses',
                element: <Allclasses></Allclasses>
            },
            {
                path: '/dashbord/myprofile',
                element: <MyProfile></MyProfile>
            },

            // teacher related routes
            {
                path: '/dashbord/addclasses',
                element: <Addclasses></Addclasses>
            },
            {
                path: '/dashbord/myclass',
                element: <MyClass></MyClass>
            },
            {
                path:'/dashbord/seedetails/:id',
                element:<SeeDetails></SeeDetails>,
                loader:({params})=>fetch(`http://localhost:5000/addteachersclass/${params.id}`)
            },
            {
                path: '/dashbord/updateclass/:id',
                element: <UpdateClass></UpdateClass>,
                loader: ({ params }) => fetch(`http://localhost:5000/addteachersclass/${params.id}`)

            },
            // student related routes
            {
                path: '/dashbord/myenrollclass',
                element: <MyEnrollClass></MyEnrollClass>
            },
            {
                path: '/dashbord/studentprofile',
                element: <StudentProfile></StudentProfile>
            },
            {
                path:'/dashbord/myenrollclassdetails/:title',
                element:<MyEnrollClassDetails></MyEnrollClassDetails>,
                loader:({params})=>fetch(`http://localhost:5000/assignmentcollection/${params.title}`)
              
            }
           
           
        ]
    }
]);

export default router;