import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { Docente } from "../../docentes/docente.types";

export class PdfService {
  static exportToPdf(docentes: Docente[], fileName: string = "docentes.pdf") {
    const doc = new jsPDF();

    // Título
    doc.setFontSize(16);
    doc.text("Lista de Docentes", 14, 20);

    // Convertimos los docentes en filas
    const data = docentes.map((d) => [
      d.codDocente,
      d.nombreDocente,
      d.codEspecialidad,
      d.telefono,
      d.edad,
      d.correo,
    ]);

    autoTable(doc, {
      startY: 30,
      head: [["Código", "Nombre", "Especialidad", "Teléfono", "Edad", "Correo"]],
      body: data,
    });

    doc.save(fileName);
  }
}
