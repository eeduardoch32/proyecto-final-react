import type { Especialidad } from "./especialidad.types";


//const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const BASE_URL = `http://localhost:5253/instituto-gestion-service/api/especialidad`;

export const getEspecialidades = async (): Promise<Especialidad[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener las especialidades");
  return res.json();
};

