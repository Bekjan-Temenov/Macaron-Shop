import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
// import SignInPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import NoPage from "../pages/NoPage";
import RegistrationForm from "../Components/Auth/RegistrationForm/RegistrationForm";
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
    ],
  },
]);
