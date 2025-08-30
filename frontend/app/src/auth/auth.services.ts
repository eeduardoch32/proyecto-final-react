
export interface LoginResponse {
  success: boolean;
  message?: string;
  usuario?: any;  // puedes tiparlo mejor según tu backend
  token?: string;
}

export const loginUsuario = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch("http://localhost:5253/instituto-gestion-service/api/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: email,
        clave: password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Error de conexión con el servidor");
  }
};
