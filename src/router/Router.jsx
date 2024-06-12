import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage"
import SignInPage from "../pages/Sign-InPage";
import NoPage from "../pages/NoPage";
import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";
import LoginPages from "../pages/LoginPages";
import ForgotPages from "../pages/ForgotPages";
import ForgotComPages from "../pages/ForgotComPages";



export const router = createBrowserRouter([
    {
        path:"auth",
        children:[
            {
              path:"/sign-in"  
            }
        ]
    },
    {
    path:"/",
    element:<Layout/>,
    errorElement:<NotFoundPage/>,
    children:[
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/sign-in",
            element:<SignInPage/>
        },
        {
            path:"/no-page",
            element:<NoPage/>
        }
    ]
}])