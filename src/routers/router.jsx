
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
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard/StudentDashboard";
import SelectedClass from "../Pages/Dashboard/StudentDashboard/StudentDashboard/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/StudentDashboard/StudentDashboard/EnrolledClass";
import Payment from "../Pages/Dashboard/StudentDashboard/StudentDashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/StudentDashboard/PaymentHistory";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard/InstructorDashboard";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass";


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
                element: <AddClass></AddClass>
            },
            {
                path:'myclass',
                element:<MyClass></MyClass>
            }
        ]
    },

    {
        path: "*",
        element: <Error></Error>
    }
]);
export default router