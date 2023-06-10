import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

const ColumnChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      Chart.register(...registerables);

      chartInstance.current = new Chart(chartContainer.current, {
        type: 'bar',
        data: {
          labels: [
            'Iphone 14 pro max - Sold: 1',
            'Iphone 14 plus - Sold: 1',
            'Galaxy S23 Ultra - Sold: 1',
            'Galaxy S22 Ultra - Sold: 1',
            'Xiaomi 13 Pro - Sold: 1',
            'Xiaomi 12S Pro - Sold: 1',
            'Iphone 14 pro - Sold: 0',
            'Iphone 14 - Sold: 0',
            'Galaxy S23 - Sold: 0',
            'Galaxy S22 - Sold: 0',
            'Xiaomi 13 - Sold: 0',
            'Xiaomi 12S Ultra - Sold: 0',
          ],
          datasets: [
            {
              label: 'Sold',
              data: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
              backgroundColor: '#565C56',
              hoverBackgroundColor: '#FF6384',
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
        },
      });
    }
  }, []);

  return  <div className="chart-container"><canvas ref={chartContainer} /></div>;
};

export default ColumnChart;
