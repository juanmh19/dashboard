import { useState, useEffect } from "react";

const Balance = ({ }) => {
    const [empleados, setEmpleados] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/empleados") // Cambia la URL según tu configuración
            .then(response => response.json())
            .then(data => setEmpleados(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    let sueldos = null
    empleados.map((empleado) => {
        sueldos = sueldos + -empleado.sueldo
        console.log(sueldos)
    });


    let gananciasActuales = parseInt(localStorage.getItem("GananciasActuales"))
    let ganancias = 0;
    let gastos = 0;
    let productos = -(0.7 * gananciasActuales)


    let total__ganancias = gananciasActuales + ganancias * 4
    let total__gastos = sueldos - productos - gastos * 4
    return (
        <div className="Balance">
            <div className="Balance__conjunto">
                <div className="Balance__ganancias">
                    <p className="Balance__tipo">Ganancias</p>
                    <div className="Balance__categorias">
                        <p className="Balance__resultados">Ventas: <span className="Balance__cantidad--ganancia">{gananciasActuales + "$"}</span> </p>
                        <p className="Balance__resultados">Subsidios: <span className="Balance__cantidad--ganancia">{ganancias + "$"}</span></p>
                        <p className="Balance__resultados">Acciones: <span className="Balance__cantidad--ganancia">{ganancias + "$"}</span></p>
                        <p className="Balance__resultados">Inversiones: <span className="Balance__cantidad--ganancia">{ganancias + "$"}</span></p>
                        <p className="Balance__resultados Balance__resultados--final">Total: <span className="Balance__cantidad--ganancia">{total__ganancias}</span></p>
                    </div>
                </div>
                <div className="Balance__gastos">
                    <p className="Balance__tipo">Gastos</p>
                    <div className="Balance__categorias">
                        <p className="Balance__resultados">Sueldos: <span className="Balance__cantidad--gastos">{sueldos + "$"}</span></p>
                        <p className="Balance__resultados">Productos: <span className="Balance__cantidad--gastos">{productos + "$"}</span></p>
                        <p className="Balance__resultados">Mantenimiento: <span className="Balance__cantidad--gastos">{gastos + "$"}</span></p>
                        <p className="Balance__resultados">Expansion: <span className="Balance__cantidad--gastos">{gastos + "$"}</span></p>
                        <p className="Balance__resultados Balance__resultados--final">Total: <span className="Balance__cantidad--gastos">{total__gastos}</span></p>
                    </div>
                </div>
            </div>
            <div className="Balance__calculo">
                <p className="Balance__resultado">Resultado: {total__ganancias + total__gastos}</p>
            </div>
        </div>
    )
}

export default Balance