import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../page/home/HomePage";
import { LoginPage } from "../page/auth/LoginPage";
import Employees from "../page/employees/Employees";
import AddEmployee from "../page/addemp/AddEmp";




export const router = createBrowserRouter([
    {
        path: '/login',
        element:    <ProtectedRoute isLoginPage={true}><LoginPage /></ProtectedRoute>,
    },
    // {
    //     path: '/register',
    //     element: <RegisterPage />,
    // },
    // {
    //     path: '/forgot-password',
    //     element: <ForgotPassword />
    // },

    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <ProtectedRoute><HomePage/></ProtectedRoute>
            },
            {
                path: '/employees',
                index: true,
                element: <ProtectedRoute><Employees/></ProtectedRoute>
            },
            {
                path: '/add-employee', // Change from '/add-employees' to '/add-employee'
                index: true, // Optional: remove this if not needed
                element: <ProtectedRoute><AddEmployee/></ProtectedRoute>,
              },
              
            // {
            //     index: true,
            //     element: <ProtectedRoute><PaymentHistory/></ProtectedRoute>
            // },
            // {
            //     index: true,
            //     element: <ProtectedRoute><Profile/></ProtectedRoute>
            // },

        ],
    },

]);