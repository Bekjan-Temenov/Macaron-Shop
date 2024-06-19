import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage"
import SignInPage from "../pages/Sign-InPage";
import BasketPage from "../pages/Basket/BasketPage";

export const router = createBrowserRouter([{
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
            path:"/basket",
            element:<BasketPage/>
        }
    ]
}])