import React, { Suspense } from 'react';
import galapagoAbout from '../resources/about-turtle.jpg'
import BubbleLoader from '../components/BubbleLoader';
import {Helmet} from "react-helmet";


const NavBar = React.lazy(() => import('../components/NavBar'));
const Footer = React.lazy(() => import('../components/Footer'));
const Spood = React.lazy(() => import('../components/Spood'));

function About() {
    return (
        <Suspense fallback={<BubbleLoader />}>
            <Helmet>
                <title>Sobre Nosotros | Galapago Studio | Soluciones creativas para impulsar tu marca en medios digitales.</title>
                <meta name="description" content="Descubrí por qué Gálapago es la mejor opción para tu marca." />
                <meta property="og:title" content="Sobre Nosotros | Galapago Studio | Soluciones creativas para impulsar tu marca en medios digitales." />
                <meta property="og:description" content="Descubrí por qué Gálapago es la mejor opción para tu marca." />
                <meta name="keywords" content="marketing digital, branding, marketing, Argentina, adquirir logo, dtf, Galapago Studio, identidad visual, estudio de diseño, consultoría de marketing, diseño de logos, destacar mi marca, publicidad en redes" />
            </Helmet>
            <section id='Services'>
                <NavBar />
                <div className='sections-sheet'>
                    <div className='sections-top-img'>
                        <h2>NOSOTROS</h2>
                        <p>Descubrí por qué somos la mejor opción.</p>
                    </div>
                    <div className='section-main'>
                        <img className='about-img' alt='A glowing green tortoise from the galapago islands' src={galapagoAbout} />
                        <div className='about-text-container'>
                            <p className='about-text'>
                                Galapago nace de la idea de brindar a todas las marcas una presencia digital sólida y efectiva en un mundo conectado, dando la oportunidad tanto a empresas establecidas como a pequeños negocios o emprendedores. <br /><br />
                                Fundada en 2020 por un desarrollador web apasionado por el diseño gráfico y el marketing, Galapago Studio se especializa en branding y marketing digital.<br /> <br />
                                Creemos en la importancia de una huella digital única, memorable y accesible para cada marca.
                            </p>
                        </div>
                    </div>
                </div>
                <Spood />
                <Footer />
            </section>
        </Suspense>
    );
}

export default About;
