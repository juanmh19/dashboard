import React, { useEffect, useState } from 'react';
const Equipo = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/empleados") // Cambia la URL según tu configuración
            .then(response => response.json())
            .then(data => setEmpleados(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSubmit = async (event, empleadoId) => {
        event.preventDefault();

        const empleado = empleados.find((e) => e.id === empleadoId);
        console.log(empleado)
        // Obtener valores de los inputs usando el estado local
        const sueldo = event.target.querySelector('.Equipo__input-sueldo').value || empleado.sueldo;
        const bono = event.target.querySelector('.Equipo__input-bono').value || empleado.bono;
        const tarea = event.target.querySelector('.Equipo__input-tarea').value || empleado.tarea;
        const experiencia = event.target.querySelector('.Equipo__input-experiencia').value || empleado.experiencia;

        // Crear el objeto con los datos a enviar al backend
        const datos = {
            sueldo: sueldo,
            bono: bono,
            tarea: tarea,
            experiencia: experiencia
        };

        try {
            const respuesta = await fetch(`http://localhost:5000/empleados/${empleadoId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            if (!respuesta.ok) {
                throw new Error('Error en la solicitud al servidor');
            }

            // Manejar la respuesta del servidor y actualizar el estado local
            const datosRespuesta = await respuesta.json();
            setEmpleados((prevEmpleados) =>
                prevEmpleados.map((e) => (e.id === empleadoId ? { ...e, ...datosRespuesta } : e))
            );

            console.log('Datos actualizados correctamente:', datosRespuesta);
        } catch (error) {
            console.error('Error al enviar datos al servidor:', error);
        }
    };

    const handleDespedir = async (empleadoId) => {
        try {
            const respuesta = await fetch(`http://localhost:5000/empleados/${empleadoId}`, {
                method: 'DELETE',
            });

            if (!respuesta.ok) {
                throw new Error('Error en la solicitud al servidor');
            }

            // Filtrar los empleados y actualizar el estado local
            setEmpleados((prevEmpleados) =>
                prevEmpleados.filter((e) => e.id !== empleadoId)
            );

            console.log('Empleado despedido correctamente');
        } catch (error) {
            console.error('Error al despedir al empleado:', error);
        }
    };

    return (
        <div className='Equipo'>
            {empleados.map(empleado => (
                <div className='Equipo__tarjeta' key={empleado.id}>
                    <div className="Equipo__caja">
                        <img className='Equipo__foto' src={"./public/imagenes/" + empleado.nombre + ".jpg"} alt="" />
                        <p className='Equipo__nombre'>{empleado.nombre}</p>
                        <p>{empleado.cargo}</p>
                    </div>
                    <form method="POST" onSubmit={(event) => handleSubmit(event, empleado.id)}>
                        <div className='Equipo__caja--informacion'>
                            {/* Utilizar estado local para manejar los valores de los inputs */}
                            <p>Sueldo: <input className='Equipo__input Equipo__input-sueldo' placeholder={empleado.sueldo + "$"} type="number" /></p>
                            <p>Bono:<input className='Equipo__input Equipo__input-bono' placeholder={empleado.bono + "$"} type="number" /></p>
                            <p>Tarea:<input className='Equipo__input Equipo__input-tarea' placeholder={empleado.tarea} type="text" /></p>
                            <p>Experiencia:<input className='Equipo__input Equipo__input-experiencia' placeholder={empleado.experiencia} type="text" /></p>
                        </div>
                        <div className='Equipo__caja--botones'>
                            <input className='Equipo__submit' type="submit" value="Modificar" />
                            <input
                                className='Equipo__submit Equipo__submit--despedir'
                                type='button'
                                value='Despedir'
                                onClick={() => handleDespedir(empleado.id)}
                            />
                        </div>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default Equipo;