import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  let gananciasActuales = parseInt(localStorage.getItem("GananciasActuales"))
  useEffect(() => {
    // Datos de ejemplo para el gráfico de líneas
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
          label: 'Ganancias Mensuales',
          data: [gananciasActuales],
          borderColor: 'rgb(33, 224, 161)', // Color de la línea
          backgroundColor: 'rgb(33, 224, 161)', // Color del área bajo la línea
          borderWidth: 2,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white', // Cambia el color del texto del eje y a blanco
          },
        },
        x: {
          ticks: {
            color: 'white', // Cambia el color del texto del eje x a blanco
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'white', // Cambia el color del texto de las etiquetas a blanco
          },
        },
      },
    };

    // Crear el gráfico de líneas
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });

    // Limpia el gráfico al desmontar el componente
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <canvas className='GraficoLinea canvas' ref={chartRef} width="250" height="80"></canvas>
  );
};

export default LineChart;
