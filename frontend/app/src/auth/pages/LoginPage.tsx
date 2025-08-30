import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { toast } from "react-toastify";
import { loginUsuario } from "../auth.services";



const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const data = await loginUsuario(email, password);

      if (data.success) {
        // Guardar sesión
        localStorage.setItem("user", JSON.stringify(data.usuario));

        toast.success("Login exitoso, bienvenido!", {
          position: "top-center",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate("/docentes");
        }, 1000);
      } else {
        toast.error(data.message || "Credenciales inválidas", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (err: any) {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
