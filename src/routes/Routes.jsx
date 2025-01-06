import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../page/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";




export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
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
                element: <h1>Dashboard</h1>
            },

        ],
    },

]);