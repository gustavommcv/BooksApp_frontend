import { StrictMode } from "react";
import router from "./routes"; 
import "./index.scss";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider";
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
  </StrictMode>
);
