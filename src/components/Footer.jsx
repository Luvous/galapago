import React, { useState } from 'react'
import Modal from './Modal';
import galapago_icon from '../resources/galapago_icon.svg'
import backdrop from '../resources/backdrop.png'


import MailChimpContainer from './MailChimpContainer';

function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Restaurar el scroll cuando se cierra el modal
    };


    const year = new Date().getFullYear();


    return (
        <section id='Footer'>
            <div className='newsletter-cta'>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    {/* Aquí puedes poner una imagen en un lado y el formulario del otro */}
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <div style={{ flex: 1 }}>
                            <img style={{
                                borderRadius: "8px 0 0 8px",
                            maxWidth: "100%",
                            objectFit: "cover",
                            height: "100%",
                            width: "100%"
                            }} src={backdrop} alt="Backdrop img" />
                        </div>
                        <div style={{padding: "1rem", flex: 2, marginLeft: '20px' }}>
                            <MailChimpContainer />
                        </div>
                    </div>
                </Modal>
                <p style={{ cursor: 'pointer' }} onClick={openModal}>SUSCRIBIRSE</p>
            </div>
            <div className='realfooter'>
                <div className='row-ft'>
                    <div className='ls-col'>
                        <img alt='icon galapago' src={galapago_icon} style={{ width: '2.5rem', marginRight: '2em' }} />
                        <p>studio.galapago@gmail.com</p>
                    </div>
                    <div className='rs-col'>
                        <div className='colcol'>
                            {/* <p>Trabaja con Nosotros</p> */}
                            <a rel="noreferrer"  href='/contact' target='_blank'>  <p>Solicitar Presupuesto</p>  </a>
                            <p style={{ cursor: 'pointer' }} onClick={openModal}>Newsletter</p>
                            {/* <p>Descargas</p> */}
                        </div>
                        <div className='colcol'>
                            <a rel="noreferrer"  href='/about' target='_blank'><p>Nosotros</p></a>
                            <a rel="noreferrer"  href='/services' target='_blank'><p>Servicios</p></a>
                            <a rel="noreferrer"  href='/contact' target='_blank'><p>Contacto</p></a>
                            <a rel="noreferrer"  href='https://medium.com/@studio.galapago' target='_blank'> <p>Blog</p></a>
                        </div>
                        <div className='colcol'>
                            <a rel="noreferrer"  href='https://www.facebook.com/GalapagoStudio/' target='_blank'><p>Facebook</p></a>
                            <a rel="noreferrer"  href='https://www.instagram.com/galapagostudio/' target='_blank'><p>Instagram</p></a>
                            <a rel="noreferrer"  href='https://www.linkedin.com/company/galapago-studio/' target='_blank'><p>LinkedIn</p></a>
                            <a rel="noreferrer"  href='https://www.behance.net/GalapagoStudio' target='_blank'><p>Behance</p></a>
                            <a rel="noreferrer"  href='https://www.threads.net/@galapagostudio' target='_blank'><p>Threads</p></a>
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