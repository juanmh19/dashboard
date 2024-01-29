import { useState } from "react";
let activado = true
let activado__grafico = true
let activado__data = true
let activado__paginas = true

const Sidebar = ({hola}) =>{

            const [menuVisible, setMenuVisible] = useState("Sidebar");
            const [InfoVisible, setInfoVisible] = useState("")

            const [graficosVisible, setGraficosVisible] = useState("")

            const [flechaGrafico, setFlechaGrafico] = useState("../public/iconos/flecha_arriba.png")
            const [flechaPaginas, setFlechaPaginas] = useState("../public/iconos/flecha_arriba.png")
            const [flechaData, setFlechaData] = useState("../public/iconos/flecha_arriba.png")


            function Grafico(params) {
                if (activado__grafico) {
                    activado__grafico = false
                    setFlechaGrafico("../public/iconos/flecha_abajo.png")
                    setGraficosVisible("oculto")
                } else {
                    setGraficosVisible("")
                    activado__grafico = true
                    setFlechaGrafico("../public/iconos/flecha_arriba.png")
                }
            }
            const [dataVisible, setDataVisible] = useState("")
            function Data(params) {
                if (activado__data) {
                    activado__data = false
                    setDataVisible("oculto")
                    setFlechaData("../public/iconos/flecha_abajo.png")
                } else {
                    setDataVisible("")
                    activado__data = true
                    setFlechaData("../public/iconos/flecha_arriba.png")
                }
            }
            const [PaginasVisible, setPaginasVisible] = useState("")
            function Paginas(params) {
                if (activado__paginas) {
                    activado__paginas = false
                    setPaginasVisible("oculto")
                    setFlechaPaginas("../public/iconos/flecha_abajo.png")
                } else {
                    setPaginasVisible("")
                    activado__paginas = true
                    setFlechaPaginas("../public/iconos/flecha_arriba.png")
                }
            }
            
            function toggleMenu(params) {
                console.log(activado)
                if (activado) {
                    activado = false
                    setMenuVisible("Sidebar__ocultoPrincipal");
                    setInfoVisible("Sidebar__oculto")
                } else {
                    setMenuVisible("Sidebar");
                    setInfoVisible("")
                    activado = true
                }
            }

            
    return(
        <div className={menuVisible}>
            <div className="Sidebar__admin">
                <p>ADMIN</p>
                <img id="menu" src="../../public/iconos/menu.png" alt="" onClick={toggleMenu} />
            </div>
            <div className={InfoVisible}>
            <div className="Sidebar__usuario">
                <img className="Sidebar__perfil" alt="" />
                <p><strong>Juan Manuel</strong></p>
                <p className="Sidebar__rango">VIP / ADMIN</p>
            </div>
            <div className="Sidebar__contenedor">

                    <div className="Sidebar__par Sidebar__par--dashboard">
                        <img src="../../public/iconos/home.png" alt="" />
                        <a href="/">Dashboard</a>
                    </div>

                    <p  className="Sidebar__categoria" onClick={Data}>Data <img className="Sidebar__img" src={flechaData} alt="" /></p>
                    <div className={dataVisible}>
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/equipo.png" alt="" />
                        <a href="/equipo">Gestionar equipo</a>
                    </div>
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/contacto.png" alt="" />
                        <a href="/contacto">Información de contacto</a>
                    </div>
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/balance.png" alt="" />
                        <a href="/balance">Balance</a>
                    </div>
                    </div>

                    <p className="Sidebar__categoria" onClick={Paginas}>Paginas<img className="Sidebar__img" src={flechaPaginas} alt="" /></p>
                    <div className={PaginasVisible}>  
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/calendario.png" alt="" />
                        <a href="/calendario">Calendario</a>
                    </div>                    
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/preguntas.png" alt="" />
                        <a href="/preguntas">Pregunta</a>
                    </div>
                    </div>


                    <p className="Sidebar__categoria" onClick={Grafico}>Graficos<img className="Sidebar__img" src={flechaGrafico} alt="" /></p>
                    <div className={graficosVisible}>
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/barras.png" alt="" />
                        <a href="/barchart">GraficoBar</a>
                    </div>
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/pie.png" alt="" />
                        <a href="/graficopie">GraficoPie</a>
                    </div>
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/lineal.png" alt="" />
                        <a href="/linechart">GraficoLineal</a>
                    </div>
                    <div className="Sidebar__par">
                        <img src="../../public/iconos/mapa.png" alt="" />
                        <a href="/radarchart">GraficoGeografico</a>
                    </div>
                    </div>
                                    
            </div>
            </div>
        </div>
    )
}

export default Sidebar