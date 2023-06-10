import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ TotalProducts, TotalOrders, TotalRevenue, AveragePrice, BestSellingProducts }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Lógica para procesar los datos y generar los datos del gráfico
    const processedData = processData(TotalProducts, TotalOrders, TotalRevenue, AveragePrice, BestSellingProducts);

    // Establecer los datos del gráfico en el estado
    setChartData(processedData);
  }, [TotalProducts, TotalOrders, TotalRevenue, AveragePrice, BestSellingProducts]);

  const processData = (TotalProducts, TotalOrders, TotalRevenue, AveragePrice, BestSellingProducts) => {
    // Lógica para procesar los datos y generar los datos del gráfico
    // Retorna un objeto con la estructura de datos esperada por el componente Line de react-chartjs-2
    return {
      labels: [], // Etiquetas de las categorías o períodos
      datasets: [
        {
          label: 'Total de productos',
          data: [], // Datos de la serie 1
          borderColor: 'rgba(75, 192, 192, 1)', // Color de borde de la línea
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo del área debajo de la línea
        },
        // Agregar más datasets para otras series si es necesario
      ],
    };
  };

  return (
    <div className="chart-component">
      {chartData ? (
        <Line data={chartData} options={false} />
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
};

export default ChartComponent;
