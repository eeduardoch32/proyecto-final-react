import { useEffect, useState } from "react";
import { deleteDocente, getDocentes, getDocentes2 } from "../docente.services";
import type { Docente } from "../docente.types";
import { Link, useLocation } from "react-router-dom";
import { ExcelService } from "../../shared/services/excelService.services";
import { PdfService } from "../../shared/services/pdfService.services";
import { LogoutButton } from "../../shared/components/LogoutButton";
import { toast } from "react-toastify";
import { confirmDialog } from "../../shared/components/ConfirmDialog";

export const DocenteListPage = () => {
  const [docentes, setDocentes] = useState<Docente[]>([]);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // cantidad de registros por página

  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    getDocentes2().then(setDocentes);
  }, []);

  useEffect(() => {
    const updated = location.state?.updatedDocente;
    if (updated) {
      setDocentes((prev) =>
        prev.map((cli) =>
          cli.idDocente === updated.idDocente ? { ...cli, ...updated } : cli
        )
      );
    }
  }, [location.state]);

  



  const handleDeleteClick = (id: string) => {

     if (isConfirming) return; //evita que se abra más de una confirmación
     setIsConfirming(true);

  confirmDialog({
    title: "Eliminar docente",
    message: "¿Estás seguro de que deseas eliminar este docente?",
    confirmText: "Sí, eliminar",
    cancelText: "Cancelar",
    onConfirm: async () => {
      try {
        await deleteDocente(id);
        setDocentes((prev) => prev.filter((d) => String(d.idDocente) !== id));
        toast.success("Docente eliminado correctamente");
      } catch (err) {
        console.error(err);
        toast.error("Error al eliminar el docente");
      }
    },
    onCancel: () => {
      setIsConfirming(false); // ✅ si cancela, también habilitamos de nuevo
    },
  });
};

    // --- Paginación ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDocentes = docentes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(docentes.length / itemsPerPage);

  const labels = {
  codDocente: "Código",
  nombreDocente: "Nombre",
  codEspecialidad: "Especialidad",
  telefono: "Teléfono",
  edad: "Edad",
  correo: "Correo"
  };

  return (

     <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg"> 
     <h1 className="text-2xl font-bold mb-4">Lista de Docentes</h1> 
     

      <div className="flex flex-wrap gap-4 justify-between mb-6">
        <div className="flex gap-2 flex-wrap">
              <button
  onClick={() => ExcelService.exportToExcel(docentes,"docentes",labels,"Lista de Docentes")}
   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
>
  Exportar Excel
</button>

   <button
          onClick={() => PdfService.exportToPdf(docentes, "docentes.pdf")}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Exportar PDF
        </button>
        </div>

   


      
        <Link
          to="/docentes/new"
             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Registrar Docente
        </Link>

         <LogoutButton /> {/* Aquí agregamos el botón de logout */}
      </div>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Cod Docente</th>
            <th className="p-3">Nombre Docente</th>
            <th className="p-3">Especialidad</th>
            <th className="p-3">Telefono</th>
            <th className="p-3">Edad</th>
            <th className="p-3">Correo</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentDocentes.map((docente) => (
            <tr key={docente.idDocente} 
                className="border-t hover:bg-gray-50 transition-colors">
              <td className="p-3">{docente.codDocente}</td>
              <td className="p-3">{docente.nombreDocente}</td>
              <td className="p-3">{docente.nombreEspecialidad}</td>
              <td className="p-3">{docente.telefono}</td>
              <td className="p-3">{docente.edad}</td>
              <td className="p-3">{docente.correo}</td>
              <td className="p-3 flex gap-2">
                <Link
                  to={`/docente/edit/${docente.idDocente}`}
                  className="text-indigo-600 hover:underline"
                >
                  Editar
                </Link>

         

                <button
  disabled={isConfirming}
  onClick={() => handleDeleteClick(docente.idDocente.toString())}
  className={`text-red-600 hover:underline ${
    isConfirming ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  Eliminar
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
     {/* --- Paginación --- */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
    
  );
};
