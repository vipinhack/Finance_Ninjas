
import React, { useState, useEffect } from "react";
import StockForm from "../components/StockForm";
import Dashboard from "../components/Dashboard";
import { fetchStockData } from "../services/stockService";
import { fetchNews } from "../services/newsService";

const HomePage = () => {
  const [stockData, setStockData] = useState(null);
  const [news, setNews] = useState([]);
  const [ticker, setTicker] = useState("AAPL");
  const [startDate, setStartDate] = useState("2022-01-01");
  const [endDate, setEndDate] = useState("2022-12-31");

  const handleFetchData = async () => {
    const stockData = await fetchStockData(ticker, startDate, endDate);
    const newsData = await fetchNews(ticker);
    setStockData(stockData);
    setNews(newsData);
  };

  useEffect(() => {
    handleFetchData();
  }, [ticker, startDate, endDate]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">Stock Risk Analytics Dashboard</h1>
      <StockForm
        ticker={ticker}
        setTicker={setTicker}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        onFetchData={handleFetchData}
      />
      {stockData && <Dashboard drawdownData={stockData.drawdown} returnData={stockData.returns} news={news} />}
    </div>
  );
};

export default HomePage;
