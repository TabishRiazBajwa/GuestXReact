import { jsPDF } from "jspdf";
import "jspdf-autotable";

const downloadCSV = (csv, filename) => {
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const jsonToCSV = (json) => {
  const keys = Object.keys(json[0]);
  const csvRows = [];

  csvRows.push(keys.join(","));

  for (const row of json) {
    const values = keys.map((key) => row[key]);
    csvRows.push(values.join(","));
  }

  const csv = csvRows.join("\n");

  return csv;
};

export function saveAsCSV(data, filename, columnOrder) {
  if (!data || data.length === 0) {
    return;
  }

  if (columnOrder && columnOrder.lenght > 0) {
    downloadCSV(
      jsonToCSV(JSON.parse(JSON.stringify(data, columnOrder, 4))),
      filename
    );
  } else {
    downloadCSV(jsonToCSV(data), filename);
  }
}

export function saveAsPDF(tabelId, filename) {
  const doc = new jsPDF({ orientation: "landscape" });

  doc.autoTable({
    html: tabelId,
  });

  doc.save(filename);
}
