import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage"
import NoPage from "../pages/NoPage";
import RegistrationForm from "../Components/Auth/RegistrationForm/RegistrationForm";
import LoginPages from "../pages/LoginPages";
import ForgotPages from "../pages/ForgotPages";
import ForgotComPages from "../pages/ForgotComPages";
import ProfilePages from "../pages/ProfilePages";
import PhotoPages from "../pages/PhotoPages";



export const router = createBrowserRouter([
    {
        path: "/sign-up",
        element: <RegistrationForm />,
    },
    {
        path: "/sign-in",
        element: <LoginPages />,
    },
    {
        path: "/sign-in/password/no",
        element: <ForgotPages />,
    },
    {
        path: "/sign-in/password",
        element: <ForgotComPages />,
    },
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/no-page",
                element: <NoPage />,
            },
            {
                path: "/Profile",
                element: <ProfilePages />,
            },
            {
                path: "/Photo",
                element: <PhotoPages />,
            },
        ],
    },
]);
