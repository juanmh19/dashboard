export default function Contacto() {

  return (
    <div className="Contacto">
      <div className="Contacto__izquierda">
        <img className="Contacto__imagen" alt="" />
        <p className="Contacto__nombre">Juan Manuel</p>
        <p>ADMIN</p>
        <p className="Contacto__frase">"El capitalismo funciona mejor de lo que parece, mientras que el socialismo suena mejor de lo que funciona"</p>
      </div>
      <form className="Contacto__derecha" action="">
        <div className="Contacto__caja">
          <label htmlFor="">Email</label>
          <input className="Contacto__input" type="text" />
        </div>
        <div className="Contacto__caja">
          <label htmlFor="">Celular</label>
          <input className="Contacto__input" type="number" />
        </div>
        <div className="Contacto__caja">
          <label htmlFor="">Usuario</label>
          <input className="Contacto__input" type="text" />
        </div>
        <div className="Contacto__caja">
          <label htmlFor="">Contraseña</label>
          <input className="Contacto__input" type="password" />
        </div>
        <div></div>
        <input className="Contacto__submit" type="submit" value="Actualizar" />
      </form>
    </div>
  )
}

