import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // borrar sesión
    navigate("/login"); // redirigir al login
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
    >
      Logout
    </button>
  );
};
