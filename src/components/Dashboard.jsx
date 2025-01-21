import React from "react";
import Chart from "./Chart";

const Dashboard = ({ drawdownData, returnData, news }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">
        Risk Analytics Dashboard
      </h2>
      <div className="charts grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart data={drawdownData} title="Drawdown Chart" />
        <Chart data={returnData} title="Logarithmic Relative Returns" />
      </div>
      <h3 className="text-xl font-bold mt-8 text-secondary">News Headlines</h3>
      <ul className="mt-4 list-disc list-inside">
        {news.map((article, index) => (
          <li key={index} className="text-gray-700">
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
