import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);
  let gananciasActuales = parseInt(localStorage.getItem("GananciasActuales"))
  useEffect(() => {
    // Datos de ejemplo para el gráfico de barras
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
          label: 'Trafico Mensual',
          data: [gananciasActuales], // Valores en porcentaje
          backgroundColor: 'rgb(33, 224, 161, 0.8)',
          borderColor: 'white',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          max: 100000, // Define el rango máximo del eje y (en porcentaje)
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

    // Crear el gráfico de barras
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Limpia el gráfico al desmontar el componente
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <canvas className='Graficobar canvas' ref={chartRef} width="300" height="100"></canvas>
  );
};

export default BarChart;
