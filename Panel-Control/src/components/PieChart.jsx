import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null); // Usamos useRef para mantener una referencia al gráfico

  useEffect(() => {
    if (chartContainer.current) {
      if (chartInstance.current) {
        // Destruir el gráfico anterior si existe
        chartInstance.current.destroy();
      }
      // Crear un nuevo gráfico
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'pie',
        data: {
          labels: ['Apple', 'Samsung', 'Xiaomi'],
          datasets: [
            {
              data: [33, 33, 33],
              backgroundColor: ['#B2B2A2', '#565C56', '#10B981'],
              hoverBackgroundColor: ['#717770', '#979B97', '#20C584'],
            },
          ],
        },

        options: {
            plugins: {
              legend: {
                labels: {
                  font: {
                    family: 'Segoe   UI',
                    weight: 'bold',
                    size: 16,
                  },
                  color: 'black',
                },
              },
            },
          },


      });
    }
  }, []);

  return <canvas ref={chartContainer} className="chart-canvas" />;
};

export default PieChart;
