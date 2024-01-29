import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');

  // Cargar eventos desde localStorage al inicializar el componente
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('enviarEventos')) || [];
    setEvents(storedEvents);
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Guardar eventos en localStorage cuando se actualiza el estado
  useEffect(() => {
    localStorage.setItem('enviarEventos', JSON.stringify(events));
  }, [events]);

  const handleInputChange = (event) => {
    setEventName(event.target.value);
  };

  const addEvent = () => {
    if (eventName) {
      const fechaCompleta = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
      };

      const newEvent = {
        date: [fechaCompleta.year, fechaCompleta.month, fechaCompleta.day],
        name: eventName,
      };

      setEvents([...events, newEvent]);
      setEventName('');

      localStorage.setItem('eventoGuardado', newEvent.name);
      localStorage.setItem('eventoGuardadoAnio', [fechaCompleta.year]);
      localStorage.setItem('eventoGuardadoMes', [fechaCompleta.month]);
      localStorage.setItem('eventoGuardadoDia', [fechaCompleta.day]);
      console.log(fechaCompleta);
    }
  };

  let extraerEvento = localStorage.getItem('eventoGuardado');

  return (
    <div className='Calendario'>
      <h2 className='Calendario__eventos'>Eventos para <span className='Calendario__eventos--span'>{date.toDateString()}</span></h2>
      <Calendar onChange={handleDateChange} value={date} />
      <div className='Calendario__caja'>
        <input className='Calendario__input' type='text' value={eventName} onChange={handleInputChange} required />
        <button className='Calendario__agregar' onClick={addEvent}>Agregar Evento</button>
      </div>

      <div>
        <ul>
        <p>Eventos para hoy:</p>
          {events
            .filter((event) => {
              const [eventYear, eventMonth, eventDay] = event.date;
              const [selectedYear, selectedMonth, selectedDay] = [
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate(),
              ];
              return eventYear === selectedYear && eventMonth === selectedMonth && eventDay === selectedDay;
            })
            .map((event, index) => (
              
              <li key={index}>{event.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendario;
