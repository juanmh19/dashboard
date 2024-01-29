import React, { useEffect, useState } from 'react';

const Topbar = () => {
    const [extraido, setExtraido] = useState([])
    const [visto, setVisto] = useState(false) 

    useEffect(() => {
        setExtraido(JSON.parse(localStorage.getItem("enviarEventos")))
    }, [])
    const tiempoActual = new Date()
    const año = tiempoActual.getFullYear()
    const mes = tiempoActual.getMonth() + 1
    const dia = tiempoActual.getDate()

    let contador = 0
    const estadoObservamiento = JSON.parse(localStorage.getItem("observamiento"))
    extraido.map((extraidos) => {
            if (año === extraidos.date[0] && extraidos.date[1] === mes && extraidos.date[2] === dia && estadoObservamiento === false) {
                contador++
            }
    })

    function observado() {
        setVisto(true)
        localStorage.setItem("observamiento", visto)
    }

    useEffect(() => {
        localStorage.setItem("diaAlmacenado", dia)
    }, [])
    let diaActualidad = localStorage.getItem("diaAlmacenado")

if (dia !== parseInt(diaActualidad)) {
    localStorage.setItem("diaAlmacenado", dia)
    setVisto(false)
    localStorage.setItem("observamiento", visto)
}
    return (
        <div className="Topbar">
            <div className="Topbar__contenedores">
                <input className="Topbar__buscador" type="text" placeholder="Buscar" />
                <img className="Topbar__search" src="../../public/iconos/search.png" alt="" />
            </div>
            <div className="Topbar__contenedores">
                <div className='Topbar__notificaciones' onClick={observado}>
                <a href="/calendario"><img className="Topbar__iconos" src="../../public/iconos/notificaciones.png" alt="" /></a>
                    <p className='Topbar__notificacion'>{contador}</p>
                </div>
                <img className="Topbar__iconos" src="../../public/iconos/ajustes.png" alt="" />
                <img className="Topbar__iconos" src="../../public/iconos/perfil.png" alt="" />
            </div>
        </div>
    )
}

export default Topbar