import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes"; 
import "./index.scss";
import { RouterProvider } from "react-router";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
  </StrictMode>
);
