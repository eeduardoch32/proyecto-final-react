
// src/services/ExcelService.ts
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export class ExcelService {
  static exportToExcel(data: any[], fileName: string) {
    // Convertir JSON a hoja de cálculo
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Crear libro de Excel
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja1");

    // Generar buffer
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    // Descargar archivo
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}.xlsx`);
  }
}
