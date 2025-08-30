/**
 * REGLAS DEL NEGOCIO
 */

import { z } from "zod";

const onlySpaces = /^\s*$/;

export const docenteBaseSchema = z.object({
  idDocente: z.string().optional(),
  codDocente: z
    .string()
    .min(2, "Cod Docente requerido")
    .transform((v) => v.trim())
    .refine((v) => !onlySpaces.test(v), "Campo no vacio"),
  nombreDocente: z
    .string()
    .min(2, "Nombre Docente requerido")
    .transform((v) => v.trim())
    .refine((v) => !onlySpaces.test(v), "Campo no vacio"),
  codEspecialidad: z
    .string()
    .min(2, "Cod Especialidad requerido")
    .transform((v) => v.trim())
    .refine((v) => !onlySpaces.test(v), "Campo no vacio"),

  telefono: z
    .string()
    .min(2, "Telefono requerido")
    .transform((v) => v.trim())
    .refine((v) => !onlySpaces.test(v), "Campo no vacio"),


  edad: z
  .string()
   .min(2, "edad  requerido")
    .transform((v) => v.trim())
    .refine((v) => !onlySpaces.test(v), "Campo no vacio"),


  correo: z
    .email({ error: "Email invalido" })
    .regex(/^[\w.%+-]+@gmail.com$/, "Solo se permiten dominios gmail")
    .transform((v) => v.trim().toLowerCase()),

});

export const docenteCreateSchema = docenteBaseSchema.omit({
  idDocente: true
});

export const docenteUpdateSchema = docenteCreateSchema;

export type DocenteCreateDTO = z.infer<typeof docenteCreateSchema>;
export type DocenteUpdateDTO = z.infer<typeof docenteUpdateSchema>;

export const docenteFormDefaults: DocenteCreateDTO = {
  codDocente: "",
  nombreDocente: "",
  codEspecialidad: "",
  telefono: "",
  edad: "",
  correo: "",
};
