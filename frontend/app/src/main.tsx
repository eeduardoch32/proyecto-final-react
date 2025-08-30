import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./auth/context/AuthContext.tsx";
import "./index.css"; // <--- importa Tailwind aquí

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </AuthProvider>
  </StrictMode>
);
