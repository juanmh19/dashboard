import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
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
    if (ventas.length === 0) {
      return; // Evitar renderizar el gráfico si no hay datos
    }

    const data = {
      labels: ['Camisetas', 'Remeras', " Pantalones", "Shorts", "Camperas", "Buzos"],
      datasets: [
        {
          data: [ventas[1], ventas[2], ventas[3], ventas[4], ventas[5], ventas[0]],
          backgroundColor: ['rgb(33, 224, 161, 0.8)', "rgb(49, 224, 33)", "rgb(167, 224, 33)", "rgb(224, 195, 33)", "rgb(33, 195, 224)", "rgb(208, 33, 224)"],
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          labels: {
            color: 'white',
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy();
    };
  }, [ventas]);

  return (
      <canvas className='canvas' ref={chartRef} width="400" height="200"></canvas>
  );
};

export default PieChart;
