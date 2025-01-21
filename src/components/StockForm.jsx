import React, { useState } from "react";

const StockForm = ({ onFetchData }) => {
  const [ticker, setTicker] = useState("AAPL");
  const [startDate, setStartDate] = useState("2022-01-01");
  const [endDate, setEndDate] = useState("2022-12-31");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchData(ticker, startDate, endDate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6"
    >
      <label className="flex flex-col">
        <span className="text-lg font-semibold text-gray-700">Stock Ticker:</span>
        <select
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="AAPL">Apple</option>
          <option value="NVDA">NVIDIA</option>
          <option value="XOM">Exxon Mobil</option>
          <option value="AMZN">Amazon</option>
          <option value="META">Meta</option>
        </select>
      </label>
      <label className="flex flex-col">
        <span className="text-lg font-semibold text-gray-700">Start Date:</span>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-lg font-semibold text-gray-700">End Date:</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </label>
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Fetch Data
      </button>
    </form>
  );
};

export default StockForm;
