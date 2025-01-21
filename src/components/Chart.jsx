
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Chart = ({ data, title }) => {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: title,
        data: data.values,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div className="chart">
      <h4 className="text-center text-lg font-semibold">{title}</h4>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
