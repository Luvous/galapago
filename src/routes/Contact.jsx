import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Spood from '../components/Spood'

function Contact() {
    return (
        <section id='Services'>
            <NavBar />
            <div className='sections-sheet'>
                <div className='sections-top-img'>
                    <h2>CONTACTO</h2>
                    <p>Contanos sobre vos o los proyectos que tengas en mente!</p>
                </div>
                <div className='section-main contact-container'>
                    <form className='contact-form'>
                        <div className='form-row'>
                            <input type='text' placeholder='Nombre' />
                            <input type='text' placeholder='Apellido' />
                        </div>
                        <input type='email' autoComplete='email' placeholder='E-Mail' />
                        <textarea placeholder='Mensaje'></textarea>
                        <button type='submit'>ENVIAR</button>
                    </form>
                    <div className='contact-illustration'>
                        {/* Aquí puedes poner la ilustración */}
                    </div>
                </div>
            </div>
            <Spood page="contact"/>
            <Footer />
        </section>
    )
}

export default Contact