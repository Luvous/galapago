import React from 'react'
import galapago_icon from '../resources/galapago_icon.svg'

function Footer() {

    const year = new Date().getFullYear();


    return (
        <section id='Footer'>
            <div className='newsletter-cta'>

                <a href='google.com'>SUSCRIBIRSE</a>
            </div>
            <div className='realfooter'>
                <div className='row-ft'>
                    <div className='ls-col'>
                        <img alt='icon galapago' src={galapago_icon} style={{width:'2.5rem', marginRight:'2em'}} />
                        <p>studio.galapago@gmail.com</p>
                    </div>
                    <div className='rs-col'>
                        <div className='colcol'>
                            {/* <p>Trabaja con Nosotros</p> */}
                            <a href='/contact' target='_blank'>  <p>Solicitar Presupuesto</p>  </a>
                            <p>Newsletter</p>
                            {/* <p>Descargas</p> */}
                        </div>
                        <div className='colcol'>
                            <a href='/about' target='_blank'><p>Nosotros</p></a>
                            <a href='/services' target='_blank'><p>Servicios</p></a>
                            <a href='/contact' target='_blank'><p>Contacto</p></a>
                           <a href='https://medium.com/@studio.galapago' target='_blank'> <p>Blog</p></a>
                        </div>
                        <div className='colcol'>
                            <a href='https://www.facebook.com/GalapagoStudio/' target='_blank'><p>Facebook</p></a>
                            <a href='https://www.instagram.com/galapagostudio/' target='_blank'><p>Instagram</p></a>
                            <a href='https://www.linkedin.com/company/galapago-studio/' target='_blank'><p>LinkedIn</p></a>
                            <a href='https://www.behance.net/GalapagoStudio' target='_blank'><p>Behance</p></a>
                            <a href='https://www.threads.net/@galapagostudio' target='_blank'><p>Threads</p></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row-ft cor'>
                    <div className='ls-col'>
                        © {year} By Galapago Studio
                    </div>
                    <div className='rs-col'>
                        <div className='colcol cor'>
                            {/* <p>Politica de Privacidad</p> */}
                            {/* <p>Terminos y Condiciones</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer