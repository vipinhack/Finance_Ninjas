
import axios from "axios";

export const fetchStockData = async (ticker, startDate, endDate) => {
  try {
    const response = await axios.get(
      `https://yahoo-finance-api.com/ticker/${ticker}?start=${startDate}&end=${endDate}`
    );
    
    return response.data; 
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};
