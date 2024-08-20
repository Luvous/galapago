import React, { Suspense } from 'react';
import BubbleLoader from '../components/BubbleLoader';
import { Helmet } from "react-helmet";

const NavBar = React.lazy(() => import('../components/NavBar'));
const Footer = React.lazy(() => import('../components/Footer'));
const Spood = React.lazy(() => import('../components/Spood'));

function Contact() {
    console.log(process.env.REACT_APP_MAILCHIMP_U);

    return (
        <Suspense fallback={<BubbleLoader />}>
            <Helmet>
                <title>Contacto | Gálapago Studio.</title>
                <meta name="description" content="Contactanos y te asesoramos sobre tu marca. Branding y marketing en un solo lugar." />
                <meta property="og:title" content="Contacto | Galapago Studio." />
                <meta property="og:description" content="Contactanos y te asesoramos sobre tu marca. Branding y marketing en un solo lugar." />
                <meta name="keywords" content="marketing digital, branding, marketing, Argentina, contacto, Galapago Studio, identidad visual, estudio de diseño, consultoría de marketing, diseño de logos, destacar mi marca, publicidad en redes" />
            </Helmet>
            <section id='Services'>
                <NavBar />
                <div className='sections-sheet'>
                    <div className='sections-top-img'>
                        <h2>CONTACTO</h2>
                        <p>Contanos sobre tu marca o los proyectos que tengas en mente!</p>
                    </div>
                    <div className='section-main contact-container'>
                        <form action="/contact/sent" className='contact-form' name='contact' method="POST" data-netlify="true" >
                            <input type="hidden" name="form-name" value="contact" />
                            <div className='form-row'>
                                <input required type='text' name='name' placeholder='Nombre' />
                                <input required type='text' name='lastname' placeholder='Apellido' />
                            </div>
                            <input required type='email' name='email' autoComplete='email' placeholder='E-Mail' />
                            <textarea required name='message' placeholder='Mensaje'></textarea>
                            <button type='submit'>ENVIAR</button>
                        </form>
                        <div className='contact-illustration'>
                            {/* Aquí puedes poner la ilustración */}
                        </div>
                    </div>
                </div>
                <Spood prompt="contact" />
                <Footer />
            </section>
        </Suspense>
    );
}

export default Contact;
