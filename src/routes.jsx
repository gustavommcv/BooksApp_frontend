import Layout from "./pages/Shared/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { homeLoader } from "./pages/HomePage/homeLoader";
import { createBrowserRouter } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader, 
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ],
  },
]);

export default router;
