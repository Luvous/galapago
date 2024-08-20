import React, { Suspense } from 'react';
import BubbleLoader from '../components/BubbleLoader';
import { Icon } from '@iconify/react';
import {Helmet} from "react-helmet";


const NavBar = React.lazy(() => import('../components/NavBar'));
const Footer = React.lazy(() => import('../components/Footer'));
const Spood = React.lazy(() => import('../components/Spood'));
const Projects = React.lazy(() => import('../components/Projects'));

function Services() {
    return (
        <Suspense fallback={<BubbleLoader />}>
            <Helmet>
                <title>Servicios | Gálapago Studio.</title>
                <meta name="description" content="Conoce los principales servicios creativos de Gálapago Studio para impulsar tu marca en medios digitales." />
                <meta property="og:title" content="Servicios | Gálapago Studio." />
                <meta property="og:description" content="Conoce los principales servicios creativos de Gálapago Studio para impulsar tu marca en medios digitales." />
                <meta name="keywords" content="marketing digital, branding, marketing, Argentina, adquirir logo, dtf, Galapago Studio, identidad visual, estudio de diseño, consultoría de marketing, diseño de logos, destacar mi marca, publicidad en redes" />
            </Helmet>
            <section id='Services'>
                <NavBar />
                <div className='sections-sheet' style={{ paddingBottom: '0' }}>
                    <div className='sections-top-img'>
                        <h2>SERVICIOS</h2>
                        <p>Descubrí algunos de nuestros principales servicios.</p>
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
                <Projects />
                <Spood />
                <Footer />
            </section>
        </Suspense>
    );
}

export default Services;
