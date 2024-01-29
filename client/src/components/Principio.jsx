import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Pie } from 'react-chartjs-2';
import LinesChart from "../pages/graficos/LinesChart";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);

const Principio = ({titulo, valor})=>{
    const [ganancias, setGanancias] = useState([])
    const [clientes, setClientes] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/ganancias") // Cambia la URL según tu configuración
          .then(response => response.json())
          .then(data => setGanancias(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    useEffect(() => {
        fetch("http://localhost:5000/clientes") // Cambia la URL según tu configuración
          .then(response => response.json())
          .then(data => setClientes(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    useEffect(() => {
        fetch("http://localhost:5000/usuarios") // Cambia la URL según tu configuración
          .then(response => response.json())
          .then(data => setUsuarios(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    useEffect(() => {
        fetch("http://localhost:5000/productos") // Cambia la URL según tu configuración
          .then(response => response.json())
          .then(data => setProductos(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

      
      let gananciaAlmacenada = 0
      let clientesAlmacenados = 0
      let usuariosAlmacenados = 0
      let productosAlmacenados = 0
      let porcentajeGanancias = 0
      let porcentajeClientes = 0 
      let porcentajeUsuarios = 0
      let porcentajeProductos = 0

        let fechaActual = new Date();
        let mes = fechaActual.getMonth() + 1 ;
        useEffect(() => {
            let almacenarMes = localStorage.setItem("mesAlmacenado", mes)
        }, [])
        let mesActual = localStorage.getItem("mesAlmacenado")

    if (mes !== parseInt(mesActual)) {
        let almacenarMes = localStorage.setItem("mesAlmacenado", mes)
        localStorage.setItem("gananciaGuardada", parseInt(ganancias))
        localStorage.setItem("clientesGuardado", parseInt(clientes))
        localStorage.setItem("usuariosGuardado", parseInt(usuarios))
        localStorage.setItem("productosGuardado", parseInt(productos))
    } else {
        gananciaAlmacenada = localStorage.getItem("gananciaGuardada")
        clientesAlmacenados = localStorage.getItem("clientesGuardado")
        usuariosAlmacenados = localStorage.getItem("usuariosGuardado")
        productosAlmacenados = localStorage.getItem("productosGuardado")
        porcentajeGanancias = parseFloat(((parseInt(ganancias) - parseInt(gananciaAlmacenada)) / parseInt(gananciaAlmacenada)) * 100); 
        porcentajeClientes = parseFloat(((parseInt(clientes) - parseInt(clientesAlmacenados)) / parseInt(clientesAlmacenados)) * 100); 
        porcentajeUsuarios = parseFloat(((parseInt(usuarios) - parseInt(usuariosAlmacenados)) / parseInt(usuariosAlmacenados)) * 100); 
        porcentajeProductos = parseFloat(((parseInt(productos) - parseInt(productosAlmacenados)) / parseInt(productosAlmacenados)) * 100); 
    }
    localStorage.setItem("GananciasActuales", ganancias)

    return(
        <div className="Principio">
        <div className="principio__caja">
            <div className='principio__izquierda'>
                <p className="principio__porcentaje" >{porcentajeGanancias.toFixed(1) + "%"}</p>
                <p className='principio__titulo'>Ganancias Totales</p>
                <p className='principio__valor'>{ganancias + "$"}</p>
            </div>
            <div className='principio__derecha'>
                <img className='principio__imagen' src="../../public/iconos/puntos.png" alt="" />
                <LinesChart/>
            </div>
        </div>
        <div className="principio__caja">
            <div className='principio__izquierda'>
                <p className="principio__porcentaje">{porcentajeClientes.toFixed(1) + "%"}</p>
                <p className='principio__titulo'>Clientes Nuevos</p>
                <p className='principio__valor'>{"+" + clientes}</p>
            </div>
            <div className='principio__derecha'>
                <img className='principio__imagen' src="../../public/iconos/puntos.png" alt="" />
                <LinesChart/>
            </div>
        </div>
        <div className="principio__caja">
            <div className='principio__izquierda'>
                <p className="principio__porcentaje">{porcentajeUsuarios.toFixed(1) + "%"}</p>
                <p className='principio__titulo'>Usuarios Nuevos</p>
                <p className='principio__valor'>{usuarios}</p>
            </div>
            <div className='principio__derecha'>
                <img className='principio__imagen' src="../../public/iconos/puntos.png" alt="" />
                <LinesChart/>
            </div>
        </div>
        <div className="principio__caja">
            <div className='principio__izquierda'>
                <p className="principio__porcentaje">{porcentajeProductos.toFixed(1) + "%"}</p>
                <p className='principio__titulo'>Ventas Totales</p>
                <p className='principio__valor'>{productos}</p>
            </div>
            <div className='principio__derecha'>
                <img className='principio__imagen' src="../../public/iconos/puntos.png" alt="" />
                <LinesChart/>
            </div>
        </div>
    </div>
    )
}


export default Principio