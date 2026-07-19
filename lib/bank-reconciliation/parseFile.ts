import ExcelJS from "exceljs";
import Papa from "papaparse";

export interface ParsedFile {
  headers: string[];
  rows: Record<string, unknown>[];
}

/** Parses an uploaded bank statement / cash book file into header names
 * plus row objects, keyed by header. Works from an ArrayBuffer so the
 * same function runs both in the browser (File.arrayBuffer(), for the
 * column-mapping preview step) and on the server (inside the API route,
 * from the multipart upload) - one parser, no drift between the two. */
export async function parseUpload(buffer: ArrayBuffer, filename: string): Promise<ParsedFile> {
  const lower = filename.toLowerCase();

  if (lower.endsWith(".csv")) {
    const text = new TextDecoder("utf-8").decode(buffer);
    const result = Papa.parse<Record<string, unknown>>(text, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: false,
    });
    const headers = result.meta.fields ?? [];
    return { headers, rows: result.data };
  }

  if (lower.endsWith(".xlsx") || lower.endsWith(".xls")) {
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.load(buffer);
    const ws = wb.worksheets[0];
    if (!ws) return { headers: [], rows: [] };

    const headerRow = ws.getRow(1);
    const headers: string[] = [];
    headerRow.eachCell({ includeEmpty: false }, (cell, colNumber) => {
      headers[colNumber - 1] = String(cell.value ?? "").trim();
    });

    const rows: Record<string, unknown>[] = [];
    ws.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const obj: Record<string, unknown> = {};
      headers.forEach((h, i) => {
        if (!h) return;
        const cell = row.getCell(i + 1);
        // unwrap ExcelJS's rich cell types (dates, formula results) to plain values
        const v = cell.value;
        if (v && typeof v === "object" && "result" in v) obj[h] = (v as { result: unknown }).result;
        else obj[h] = v;
      });
      rows.push(obj);
    });
    return { headers, rows };
  }

  throw new Error(`Unsupported file type: ${filename}. Upload a .xlsx, .xls, or .csv file.`);
}
