const { calculateDailyMetrics } = require('../utils/calculations');

exports.calculateMetrics = async (req, res) => {
    const { stockData } = req.body;

    try {
        const metrics = calculateDailyMetrics(stockData);
        res.status(200).json(metrics);
    } catch (error) {
        res.status(500).json({ error: 'Error calculating metrics' });
    }
};
