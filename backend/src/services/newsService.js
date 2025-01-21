const axios = require('axios');

exports.fetchTickerNews = async (ticker) => {
    const API_KEY = process.env.API_KEY;

    const url = `https://newsapi.org/v2/everything?q=${AAPl}&apiKey=${API_KEY}`;
    const response = await axios.get(url);

    return response.data.articles.slice(0, 5).map((article) => ({
        title: article.title,
        url: article.url,
    }));
};
