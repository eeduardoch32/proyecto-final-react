import ExcelJS from "exceljs";
import { saveAs } from "file-saver";


export class ExcelService {
  static async exportToExcel(
  data: any[],
  fileName: string,
  labels: Record<string, string>,
  title?: string
) {
  if (!data || data.length === 0) return;

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Hoja 1");

  let startRow = 1;

  // Si hay título
  if (title) {
    const colCount = Object.keys(labels).length;
    worksheet.mergeCells(startRow, 1, startRow, colCount);
    const titleCell = worksheet.getCell(startRow, 1);
    titleCell.value = title;
    titleCell.alignment = { horizontal: "center", vertical: "middle" };
    titleCell.font = { bold: true, size: 14 };
    startRow++;
  }

  // Cabecera
  const headerRow = worksheet.addRow(Object.values(labels));
  headerRow.eachCell((cell) => {
    cell.font = { bold: true, color: { argb: "FFFFFFFF" } }; // texto blanco
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "4472C4" }, // azul
    };
    cell.alignment = { horizontal: "center", vertical: "middle" };
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  });

  // Filas de datos -> SOLO columnas de labels
  data.forEach((row) => {
    worksheet.addRow(Object.keys(labels).map((key) => row[key]));
  });

  // Ajustar ancho de columnas
  Object.keys(labels).forEach((_, index) => {
    worksheet.getColumn(index + 1).width = 20;
  });

  // Guardar archivo
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), `${fileName}.xlsx`);
}

}