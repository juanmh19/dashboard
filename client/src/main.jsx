import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./principio.css"
import "./pages/graficos/parent.css"
import "./sidebar.css"
import "./pages/preguntas/Preguntas.css"
import "./pages/equipo/equipo.css"
import "./pages/contacto/contacto.css"
import "./pages/balance/balance.css"
import "./pages/calendario/calendario.css"
import "../src/App.css"

import Topbar from "./components/Topbar.jsx"

import Sidebar from './components/Sidebar.jsx'
import Resumen from "./components/Resumen.jsx"  
import Principio from './components/Principio.jsx'
import BarChart from './pages/graficos/BarChart.jsx'
import PieChart from "./pages/graficos/PieChart.jsx"
import LineChart from "./pages/graficos/LineChart.jsx"
import RadarChart from './pages/graficos/RadarChart.jsx'
import Preguntas from './pages/preguntas/Preguntas.jsx'
import Equipo from './pages/equipo/Equipo.jsx'
import Contacto from './pages/contacto/Contacto.jsx'
import Balance from './pages/balance/Balance.jsx'
import Calendario from './pages/calendario/Calendario.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <section className='Hero'>
          <Sidebar />
          <div className='Hero__info'>
            <Topbar />
            <Resumen />
            <Principio />
            <div class="parent">
              <div class="div1"><p className='div1__p'>Venta Empresarial</p><PieChart /></div>
              <div class="div2"><LineChart /></div>
              <div class="div3"><BarChart /></div>
              <div class="div4"><p className='div1__p'>Venta Continental</p><RadarChart /></div>
            </div>
          </div>
        </section>
      }></Route>


      <Route path="/preguntas" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion'>
            <Topbar />
            <Preguntas></Preguntas>
          </div>
        </section>
      }></Route>


      <Route path="/equipo" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion'>
            <Topbar />
            <Equipo></Equipo>
          </div>
        </section>
      }></Route>


      <Route path="/contacto" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion Contacto__hero'>
            <Topbar />
            <Contacto></Contacto>
          </div>
        </section>
      }></Route>


      <Route path="/graficopie" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion graficos'>
            <Topbar />
            <div className="Caja__grafico">
              <PieChart />
            </div>
          </div>
        </section>
      }></Route>


      <Route path="/linechart" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion graficos'>
            <Topbar />
            <div className="Caja__grafico">
              <LineChart />
            </div>
          </div>
        </section>
      }></Route>


      <Route path="/barchart" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion graficos'>
            <Topbar />
            <div className="Caja__grafico">
              <BarChart />
            </div>
          </div>
        </section>
      }></Route>


      <Route path="/radarchart" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion graficos'>
            <Topbar />
            <div className="Caja__grafico">
              <RadarChart />
            </div>
          </div>
        </section>
      }></Route>


      <Route path="/balance" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion graficos'>
            <Topbar />
            <Balance />
          </div>
        </section>
      }></Route>


      <Route path="/calendario" element={
        <section className='Hero'>
          <Sidebar></Sidebar>
          <div className='Preguntas__informacion graficos'>
            <Topbar />
            <Calendario />
          </div>
        </section>
      }></Route>
    </Routes>
  </BrowserRouter>
)
