import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
// import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage"
import NoPage from "../pages/NoPage";
import RegistrationForm from "../Components/Auth/RegistrationForm/RegistrationForm";
import LoginPages from "../pages/LoginPages";
import ForgotPages from "../pages/ForgotPages";
import ForgotComPages from "../pages/ForgotComPages";
import ProfilePages from "../pages/ProfilePages";
import PhotoPages from "../pages/PhotoPages";
import InfoPages from "../pages/InfoPages";
import OnenewsPages from "../pages/OnenewsPages";
import BasketPage from "../pages/Basket/BasketPage";
import DelivPage from "../pages/DelivPage";
import MacaronPages from "../pages/MacaronPages";
import SetsPage from "../pages/SetsPage";
import Dessertspages from "../pages/Dessertspages";
import WeddingPage from "../pages/WeddingPage";
import NotfauntComponentPages from "../pages/NotfauntComponentPages";
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
        errorElement: <NotfauntComponentPages />,
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
            {
                path:"/info/:id",
                element:<InfoPages/>
            },
            {
                path:"/Onenews",
                element:<OnenewsPages/>
            },
            {
                path:"/deliv",
                element:<DelivPage/>
            },
            {
                path:"/basket",
                element:<BasketPage/>
            },
            {
                path:"/macaron",
                element:<MacaronPages/>
            },
            {
                path:"/sets",
                element:<SetsPage/>
            },
            {
                path:"/Desserts",
                element:<Dessertspages/>
            },
            {
                path:"/Wedding",
                element:<WeddingPage/>
            },
            // {
            //     path:"/NotfauntComponent",
            //     element:<NotfauntComponentPages/>
            // },

        ],
    },
]);
