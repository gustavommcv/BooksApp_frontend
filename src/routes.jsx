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
import booksPageLoader from "./pages/BooksPage/booksPageLoader";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PostReviewPage from "./pages/PostReviewPage/PostReviewPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage/ProfileSettingsPage";
import PostCommentPage from "./pages/PostCommentPage/PostCommentPage";

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
        path: '/profile/:userId',
        element: <ProfilePage />,
      },
      {
        path: '/review/:reviewId',
        element: <ReviewPage />
      },
      {
        path: '/books',
        children: [
          {
            index: true,
            element: <BooksPage />,
            loader: booksPageLoader
          },
          {
            path: ':bookId',
            element: <BookPage />,
            loader: bookPageLoader
          }
        ]
      },
      // Protected routes
      {
        path: '/post-review',
        element: <ProtectedRoute />,
        children: [
          {
            path: ':bookId',
            element: <PostReviewPage />
          }
        ]
      },
      {
        path: '/post-comment',
        element: <ProtectedRoute />,
        children: [
          {
            path: ':reviewId',
            element: <PostCommentPage />
          }
        ]
      },
      // Protected route for profile settings
      {
        path: '/profile/settings',
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <ProfileSettingsPage />
          }
        ]
      }
    ],
  },
]);

export default router;
