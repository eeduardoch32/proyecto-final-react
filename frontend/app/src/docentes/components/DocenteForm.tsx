import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createDocente,
  getDocenteById,
  updateDocente,
} from "../docente.services";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  docenteCreateSchema,
  docenteUpdateSchema,
  type DocenteCreateDTO,
  type DocenteUpdateDTO,
} from "../schemas";
import { FormField } from "../common/FormField";

import {
  withNotifications,
  type WithNotificationsProps,
} from "../../shared/withNotifications";

type Props = {
  idDocente?: string;
} & WithNotificationsProps;

export const DocenteFormImpl = ({ idDocente, notify }: Props) => {
  const navigate = useNavigate();

  const isEdit = Boolean(idDocente);
  const schema = isEdit ? docenteUpdateSchema : docenteCreateSchema;

  type DocenteFormData = typeof schema extends typeof docenteCreateSchema
    ? DocenteCreateDTO
    : DocenteUpdateDTO;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DocenteFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: DocenteFormData) => {
    try {
      if (idDocente) {
        await updateDocente(idDocente, data);
        notify.success("Docente fue actualizado");
      } else {
        await createDocente(data);
        notify.success("Docente fue creado");
      }
      navigate("/", {
        state: idDocente
          ? { updatedDocente: { idDocente: idDocente, ...data } }
          : undefined,
      });
    } catch {
      notify.error("No se pudo registrar al docente");
    }
  };

  useEffect(() => {
    if (idDocente) {
      getDocenteById(idDocente).then((data) => {
        reset({
          codDocente: data.codDocente,
          nombreDocente: data.nombreDocente,
          codEspecialidad: data.codEspecialidad,
          telefono: data.telefono,
          edad: data.edad,
          correo: data.correo,
        });
      });
    }
  }, [idDocente, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-6">
        {idDocente ? "Editar Docente" : "Registro del docente"}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Cod Docente"
          registration={register("codDocente")}
          error={errors.codDocente}
          placeholder="Ingresa el nombre"
        />
        <FormField
          label="Nombre Docente"
          registration={register("nombreDocente")}
          error={errors.nombreDocente}
          placeholder="Ingresa el nombre"
        />
        <FormField
          label="Cod Especialidad"
          registration={register("codEspecialidad")}
          error={errors.codEspecialidad}
          placeholder="Ingresa la especialidad"
        />
         <FormField
          label="Telefono"
          registration={register("telefono")}
          error={errors.telefono}
          placeholder="Ingresa el telefono"
        />
             <FormField
          label="Edad"
          type="number"
          registration={register("edad")}
          error={errors.edad}
          placeholder="Ingresa la edad"
        />
        
        <FormField
          label="Correo"
          type="email"
          registration={register("correo")}
          error={errors.correo}
          placeholder="Ingresa el correo"
        />
       

     
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {idDocente ? "Actualizar Docente" : "Registrar Docente"}
      </button>
    </form>
  );
};

export const DocenteForm = withNotifications(DocenteFormImpl);
