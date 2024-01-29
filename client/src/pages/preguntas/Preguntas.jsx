import React, { useEffect, useState } from 'react';

const Preguntas = (params) =>{
    const [className, setClassName] = useState("Preguntas__caja")
    const [textoOculto, setTextoOculto] = useState("Preguntas__oculto")
    const [activado, setActivado] = useState(false)
    

    function eventoPregunta(params) {
        if (activado === false) {
            setClassName("none")
            setTextoOculto("Preguntas__visible")
            setActivado(true)
            preguntas__contenedor.style.display = "flex"
            preguntas__contenedor.style.justifyContent = "center"
            preguntas__contenedor.style.alignItems = "center"
            preguntas__contenedor.style.height = "50vh"
            event.target.style.display = "flex"
            event.target.style.flexDirection = "column"
            event.target.style.alignItems = "center"
            event.target.style.justifyContent = "space-evenly"
            event.target.style.height = "80%"
            event.target.style.width = "80%"
            event.target.style.background = "#212121"
            event.target.style.borderRadius = "10px"
            event.target.style.boxShadow = "0px 0px 5px 0px rgb(33, 224, 161)"
            event.target.style.paddingTop = "20px"
        } else {
            setTextoOculto("Preguntas__oculto")
            preguntas__contenedor.style.display = "grid"
            setActivado(false)
            event.target.style = ""
            setClassName("Preguntas__caja")
        }
        console.log(activado)
    }
        return (
          <div className='Preguntas'>
            <div>
                <h1 className='Preguntas__h1'>Preguntas Frecuentes</h1>
            </div>
            <div id='preguntas__contenedor' className='Preguntas__contenedor'>
                <div className={className} onClick={eventoPregunta}>
                    <p className='Preguntas__p'><strong>¿Cómo añado un evento?</strong></p>
                    <p className={textoOculto}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ab, consequuntur, nihil at atque minima rem facere facilis numquam assumenda expedita ipsam ea sequi porro. Nesciunt beatae hic atque delectus.</p>
                </div>
                <div className={className} onClick={eventoPregunta}>
                    <p className='Preguntas__p'><strong>¿Cómo cambio la temporalidad?</strong></p>
                    <p className={textoOculto}>Deberas ingresar en los ajustes del dato a cambiar y asignar las temporalidades permitidas.</p>
                </div>
                <div className={className} onClick={eventoPregunta}>
                    <p className='Preguntas__p'><strong>¿Qué muestran las notificaciones?</strong></p>
                    <p className={textoOculto}>Los eventos asignados en el calendario que se han cumplido o que han alcanzado la fecha indicada.</p>
                </div>
                <div className={className} onClick={eventoPregunta}>
                    <p className='Preguntas__p'><strong>¿Cómo añado mas empleados?</strong></p>
                    <p className={textoOculto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo totam deserunt explicabo culpa laboriosam ad adipisci, minus, saepe alias quisquam nemo non, harum tempora ullam vitae perferendis voluptatibus inventore dolore.</p>
                </div>
                <div className={className} onClick={eventoPregunta}>
                    <p className='Preguntas__p'><strong>¿Cómo solicito mas funciones?</strong></p>
                    <p className={textoOculto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo totam deserunt explicabo culpa laboriosam ad adipisci, minus, saepe alias quisquam nemo non, harum tempora ullam vitae perferendis voluptatibus inventore dolore.</p>
                </div>
                <div className={className} onClick={eventoPregunta}>
                    <p className='Preguntas__p'><strong>¿Cómo cambio los datos de mi perfil?</strong></p>
                    <p className={textoOculto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo totam deserunt explicabo culpa laboriosam ad adipisci, minus, saepe alias quisquam nemo non, harum tempora ullam vitae perferendis voluptatibus inventore dolore.</p>
                </div>
                <div className={className} onClick={eventoPregunta}>
                    <p className='Preguntas__p'><strong>¿Qué hago si tengo problemas?</strong></p>
                    <p className={textoOculto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo totam deserunt explicabo culpa laboriosam ad adipisci, minus, saepe alias quisquam nemo non, harum tempora ullam vitae perferendis voluptatibus inventore dolore.</p>
                </div>
                <div className={className} onClick={eventoPregunta}>
                    <p className='Preguntas__p'><strong>¿Puedo ampliar los datos del balance?</strong></p>
                    <p className={textoOculto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo totam deserunt explicabo culpa laboriosam ad adipisci, minus, saepe alias quisquam nemo non, harum tempora ullam vitae perferendis voluptatibus inventore dolore.</p>
                </div>
            </div>
          </div>
        )
}

export default Preguntas