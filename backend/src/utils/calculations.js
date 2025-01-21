exports.calculateDailyMetrics = (stockData) => {
    const metrics = [];
    let peak = stockData[0].adjClose;

    stockData.forEach((day, index) => {
        const dailyReturn =
            index > 0
                ? ((day.adjClose - stockData[index - 1].adjClose) / stockData[index - 1].adjClose) * 100
                : 0;

        peak = Math.max(peak, day.adjClose);
        const drawdown = ((day.adjClose - peak) / peak) * 100;

        metrics.push({ date: day.date, dailyReturn, drawdown });
    });

    return metrics;
};
