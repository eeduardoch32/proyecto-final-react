
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem("user"); //aquí usamos lo que guardaste

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
