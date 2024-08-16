import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import services from '../resources/sections/services.jpg'
import { Icon } from '@iconify/react';
import Spood from '../components/Spood';

function Services() {
    return (
        <section id='Services'>
            <NavBar />
            <div className='sections-sheet'>
                <div className='sections-top-img'>
                    <h2>SERVICIOS</h2>
                    <p>Descubrí algunos de nuestros servicios principales.</p>
                </div>

                <div className='section-main services-grid'>
                    <div className='service-card'>
                        <Icon icon="fluent:design-ideas-16-filled" width='7rem' color='var(--yellow)' />
                        <h3>Branding</h3>
                        <p>Creación y rediseño de identidades visuales únicas y coherentes que representan la esencia de tu marca.</p>
                    </div>
                    <div className='service-card'>
                        <Icon icon="fluent:megaphone-loud-20-filled" width='7rem' color='var(--yellow)' />
                        <h3>Marketing Digital</h3>
                        <p>Desarrollo de estrategias efectivas para aumentar la visibilidad y el alcance de tu marca en el entorno digital.</p>
                    </div>
                    <div className='service-card'>
                        <Icon icon="fluent:window-dev-edit-16-filled" width='7rem' color='var(--yellow)' />
                        <h3>Desarrollo Web</h3>
                        <p>Diseño y desarrollo de sitios funcionales y estéticamente atractivos que reflejan la identidad de tu marca.</p>
                    </div>
                    <div className='service-card'>
                        <Icon icon="mdi:web" width='5.8rem' color='var(--white)' />
                        <h3>Redes Sociales</h3>
                        <p>Creación y gestión de campañas publicitarias para alcanzar a tu público objetivo.</p>
                    </div>
                    <div className='service-card'>
                        <Icon icon="clarity:design-solid" width='5.75rem' color='var(--white)' />
                        <h3>Diseño Gráfico</h3>
                        <p>Diseño gráfico para productos digitales o impresión, producción y maquetados para diversos rubros.</p>
                    </div>
                    <div className='service-card'>
                        <Icon icon="fluent:news-20-filled" width='5.8rem' color='var(--white)' />
                        <h3>Publicidad</h3>
                        <p>Creación y gestión de campañas publicitarias para alcanzar a tu público objetivo.</p>
                    </div>
                </div>
            </div>
<Spood />
            <Footer />
        </section>
    )
}

export default Services