import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage"
import NoPage from "../pages/NoPage";
import RegistrationForm from "../Components/Auth/RegistrationForm/RegistrationForm";
import LoginPages from "../Components/Auth/Login/Login";
import ForgotPages from "../Components/Auth/Forgot/Forgot";
import ForgotComPages from "../Components/Auth/ForgotCom/ForgotCom";
import InfoPages from "../pages/InfoPages";


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
                path:"/info/:id",
                element:<InfoPages/>
            }
        ],
    },
]);
