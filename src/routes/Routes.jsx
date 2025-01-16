import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../page/home/HomePage";
import { LoginPage } from "../page/auth/LoginPage";




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

        ],
    },

]);