import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PercentageChart = () => {
  const chartRef = useRef(null);
  let fechaActual = new Date();
  let dias = fechaActual.getDate();
  let cantidad = 30 - dias
  console.log(dias)

  useEffect(() => {
    // Datos de ejemplo para el gráfico de porcentaje
    const data = {
      datasets: [
        {
          data: [dias, cantidad], // Porcentajes
          backgroundColor: ['rgb(33, 224, 161, 0.8)', 'rgba(0, 0, 0, 0.1)'],
        },
      ],
    };

    // Crear el gráfico de porcentaje
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut', // Puedes utilizar 'pie' para un gráfico de pastel tradicional
      data: data,
    });

    // Limpia el gráfico al desmontar el componente
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="50" height="50"></canvas>
    </div>
  );
};

export default PercentageChart;
