import { DocenteForm } from "../components/DocenteForm";
import { useParams } from "react-router-dom";

export const DocenteFormPage = () => {
  const { id } = useParams();

  return (
    <div>
      <DocenteForm idDocente={id} />
    </div>
  );
};
