const axios = require('axios');

exports.fetchStockPrices = async (ticker, startDate, endDate) => {
    const url = `https://query1.finance.yahoo.com/v7/finance/download/${ticker}?period1=${Math.floor(
        new Date(startDate).getTime() / 1000
    )}&period2=${Math.floor(new Date(endDate).getTime() / 1000)}&interval=1d&events=history`;

    const response = await axios.get(url);
    const rows = response.data.split('\n').slice(1);

    return rows.map((row) => {
        const [date, , , , , adjClose] = row.split(',');
        return { date, adjClose: parseFloat(adjClose) };
    });
};
