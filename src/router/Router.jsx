import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import NoPage from "../pages/NoPage";
import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";
import LoginPages from "../pages/LoginPages";
import ForgotPages from "../pages/ForgotPages";
import ForgotComPages from "../pages/ForgotComPages";



export const router = createBrowserRouter([
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
        path: "/RegistrationForm",
        element: <RegistrationForm />,
      },
      {
        path: "/Login",
        element: <LoginPages />,
      },
      {
        path: "/Forgot",
        element: <ForgotPages />,
      },
      {
        path: "/ForgotCom",
        element: <ForgotComPages />,
      },
    ],
  },
]);
