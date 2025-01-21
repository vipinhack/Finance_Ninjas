const { fetchStockPrices } = require('../services/yahooFinance');

exports.fetchStockData = async (req, res) => {
    const { ticker, startDate, endDate } = req.body;

    try {
        const stockData = await fetchStockPrices(ticker, startDate, endDate);
        res.status(200).json(stockData);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
};
