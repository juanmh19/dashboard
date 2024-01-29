import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = () => {
  const chartRef = useRef(null);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    let activado = true;

    fetch("http://localhost:5000/ventas")
      .then(response => response.json())
      .then(datas2 => {
        if (activado) {
          setVentas(datas2);
        }
      })
      .catch(error => console.error('Error fetching data:', error));

    // Limpia el activado al desmontar el componente
    return () => {
      activado = false;
    };
  }, []);

  useEffect(() => {
    // Datos de ejemplo para el gráfico radar
    const data = {
      labels: ["Sudamerica", "Europa", "Asia", "USA"],
      datasets: [
        {
          label: 'Camisetas' , 
          data: [500, 400, 300 ,500],
          borderColor: 'rgb(33, 224, 161)', // Color de la línea
          backgroundColor: 'rgba(33, 224, 161, 0.2)', // Color del área bajo la línea
          borderWidth: 2,
        }, {
            label: 'Remeras' , 
            data: [200, 240, 240 ,300],
            borderColor: 'rgb(49, 224, 33)', // Color de la línea
            backgroundColor: 'rgb(49, 224, 33, 0.2)', // Color del área bajo la línea
            borderWidth: 2,
        }, {
            label: 'Pantalones' , 
            data: [50, 140, 120 ,150],
            borderColor: 'rgb(167, 224, 33)', // Color de la línea
            backgroundColor: 'rgb(167, 224, 33, 0.2)', // Color del área bajo la línea
            borderWidth: 2,
        }, {
            label: 'Shorts' , 
            data: [350, 480, 180 ,250],
            borderColor: 'rgb(224, 195, 33)', // Color de la línea
            backgroundColor: 'rgb(224, 195, 33, 0.2)', // Color del área bajo la línea
            borderWidth: 2,
        }, {
            label: 'Camperas' , 
            data: [450, 400, 300 ,320],
            borderColor: 'rgb(33, 195, 224)', // Color de la línea
            backgroundColor: 'rgb(33, 195, 224, 0.2)', // Color del área bajo la línea
            borderWidth: 2,
        }, {
            label: 'Buzos' , 
            data: [500, 450, 500 ,380],
            borderColor: 'rgb(208, 33, 224)', // Color de la línea
            backgroundColor: 'rgb(208, 33, 224, 0.2)', // Color del área bajo la línea
            borderWidth: 2,
        }
      ],
    };

    const options = {
      scales: {
        r: {
          angleLines: {
            color: 'white', // Cambia el color de las líneas radiales a blanco
          },
          pointLabels: {
            color: 'white', // Cambia el color del texto de las etiquetas radiales a blanco
          },
          ticks: {
            color: 'white', // Cambia el color del texto de los ticks a blanco
          },
        suggestedMin: 50,
        suggestedMax: 500
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

    // Crear el gráfico radar
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: options,
    });

    // Limpia el gráfico al desmontar el componente
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <canvas className='GraficoRadar canvas' ref={chartRef} width="300" height="300"></canvas>
  );
};

export default RadarChart;
