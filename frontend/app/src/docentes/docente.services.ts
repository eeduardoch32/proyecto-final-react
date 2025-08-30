import type { Docente } from "./docente.types";
import type { DocenteCreateDTO, DocenteUpdateDTO } from "./schemas";

//const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const BASE_URL = `http://localhost:5253/instituto-gestion-service/api/docente`;

export const getDocentes = async (): Promise<Docente[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener los docentes");
  return res.json();
};

export const getDocenteById = async (id: string): Promise<Docente> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("No se obtuvo el docente");
  return res.json();
};

export const createDocente = async (
  data: DocenteCreateDTO
): Promise<Docente> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear un docente");
  return res.json();
};

export const updateDocente = async (
  id: string,
  data: DocenteUpdateDTO
): Promise<Docente> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("No se pudo actualizar el docente");
  return res.json();
};


export const deleteDocente = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("No se pudo eliminar el docente");
};
