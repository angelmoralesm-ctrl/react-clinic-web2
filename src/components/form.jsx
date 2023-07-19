import React from 'react'
import './form.css'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Enviar mensaje')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Enviando Mensaje...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contactanos</h2>
      <h3 className="mb-3">¡Hablemos de tu sonrisa!</h3>
      <h3 className="mb-3">Comunicate con nuestro equipo hoy mismo</h3>
      <form onSubmit={onSubmit}>
        <div id= 'contenedor'>

          <div className="mb-3" id='contenedor_izq'>
            <label className="form-label" htmlFor="name">
              Primer Nombre
            </label>
            <input className="form-control" type="text" id="name" required />
            <label className="form-label" htmlFor="name">
              Segundo Nombre
            </label>
            <input className="form-control" type="text" id="name" required />
          
          <div className="mb-3">
            <label className="form-label" htmlFor="email" placeholder='correo@ejemplo.com'>
              Correo Electronico
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Mensaje
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
          </div>
          <div className="mb-3" id='contenedor_der'>
            <p>GOOGLEE MAP PLACEHOLDER</p>
          </div> 
        </div>
      </form>
    </div>
  )
}
export default ContactForm