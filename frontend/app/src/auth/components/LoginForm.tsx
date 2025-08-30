import { useState } from "react";
import bgImage from "../../assets/nature-3194001_1280.jpg"; // ajusta el nombre según tu imagen

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar solo correos Gmail
    if (!email.endsWith("@gmail.com")) {
      alert("Solo se permiten correos con dominio @gmail.com");
      return;
    }

    onLogin(email, password);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-80 bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

      {/* Input de correo */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-600">Correo Gmail</label>
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Input de contraseña */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-600">Contraseña</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Botón de login */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
      >
        Iniciar Sesión
      </button>
    </form></div>
  );
};

export default LoginForm;
