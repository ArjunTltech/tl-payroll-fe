import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../page/home/HomePage";
import { LoginPage } from "../page/auth/LoginPage";
import Employees from "../page/employees/Employees";




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
                index: true,
                element: <ProtectedRoute><Employees/></ProtectedRoute>
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