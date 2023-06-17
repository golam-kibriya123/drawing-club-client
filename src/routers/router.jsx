
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard/Dashboard";
import SelectedClass from "../Pages/Dashboard/StudentDashboard/StudentDashboard/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/StudentDashboard/StudentDashboard/EnrolledClass";
import Payment from "../Pages/Dashboard/StudentDashboard/StudentDashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/StudentDashboard/PaymentHistory";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard/InstructorDashboard";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass";
import AddClasses from "../Pages/Dashboard/InstructorDashboard/AddClasses";
import UpdateClass from "../Pages/Dashboard/InstructorDashboard/UpdateClass";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";



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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ],
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '',
                element: <InstructorDashboard></InstructorDashboard>
            },
            {
                path: 'selectedclasses',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enrolled',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'addclass',
                element: <AddClasses></AddClasses>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>,
               
            },
            {
                path: 'myclass/updateclass/:id',
                element: <UpdateClass></UpdateClass>,
                loader: ({ params }) => fetch(` https://draing-club-server.vercel.app/classes/${params.id}`)

            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>
            }
            ,
            {
                path: 'manageuser',
                element: <ManageUsers></ManageUsers>

            }
        ]
    },

    {
        path: "*",
        element: <Error></Error>
    }
]);
export default router