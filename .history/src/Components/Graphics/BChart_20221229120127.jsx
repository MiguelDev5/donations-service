import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Campaña", "Cantidad de personas que participaron", "Código de distrito", "Nombre de Campaña", "Código de campaña"],
  ["Navidad", 50, 1, "Campaña 01", 100],
  ["Damnificado", 30, 1, "Campaña 02", 200],
  ["Damnificado", 80, 2, "Campaña 02", 200],
  ["Navidad", 40, 2, "Campaña 01", 100],
  ["Damnificado incendio", 10, 2, "Campaña 03", 300],
  ["Navidad", 70, 3, "Campaña 01", 100],
  ["Damnificado incendio", 80, 1, "Campaña 03", 300],
  ["Damnificado incendio", 110, 1, "Campaña 03", 300],
  ["Mascotas", 10, 2, "Campaña 04", 400],
  ["Mascotas", 60, 1, "Campaña 04", 400],
];

export const options = {
  title: "Campañas por distrito",
  hAxis: { title: "Campañas" },
  vAxis: { title: "Distritos" },
  bubble: {
    textStyle: {
      fontSize: 12,
      fontName: "Times-Roman",
      color: "green",
      bold: true,
      italic: true,
      auraColor: "none",
    },
  },
};

export function BChart() {
  return (
    <Chart
        chartType="BubbleChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
    />
  );
}