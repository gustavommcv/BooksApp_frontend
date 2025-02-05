import Layout from "./pages/Shared/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { homeLoader } from "./pages/HomePage/homeLoader";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { loginAction } from "./pages/LoginPage/loginAction";
import { createBrowserRouter } from "react-router-dom";
import BookPage from "./pages/BookPage/BookPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import { signUpAction } from "./pages/SignUpPage/SignUpAction";
import bookPageLoader from "./pages/BookPage/bookPageLoader";

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
        element: <LoginPage />,
        action: loginAction
      },
      {
        path: '/signup',
        element: <SignUpPage />,
        action: signUpAction
      },
      {
        path: '/books',
        children: [
          {
            index: true,
            element: <BooksPage />
          },
          {
            path: ':bookId',
            element: <BookPage />,
            loader: bookPageLoader
          }
        ]
      }
      
    ],
  },
]);

export default router;
