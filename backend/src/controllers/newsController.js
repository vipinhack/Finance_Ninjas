const { fetchTickerNews } = require('../services/newsService');

exports.fetchNews = async (req, res) => {
    const { ticker } = req.params;

    try {
        const news = await fetchTickerNews(ticker);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news' });
    }
};
