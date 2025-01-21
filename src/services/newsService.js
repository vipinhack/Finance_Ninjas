import axios from "axios";

export const fetchNews = async (ticker) => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${ticker}&apiKey=YOUR_API_KEY`
  );
  return response.data.articles;
};
