import React from 'react'
import landingback from '../resources/noise-background-quick.png';
import turtle_sent from '../resources/sent.webp';
import CursorFollower from '../components/CursorFollower';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Landing() {


    return (
        <section id='404' >
            <NavBar />
            <div style={{ minHeight: '100vh' }}>
                <img alt='background noise' className='noisebck' src={landingback} />
                <CursorFollower size={150} />
                <div className='shifting-text'>
                    <h1 style={{ color: 'var(--green)', fontSize: '5rem' }}> Mensaje Enviado </h1>

                    <div className='subtext'>
                        <p style={{margin:'0'}}>Nos pondremos en contacto contigo tan pronto sea posible. <br/><br/>
                        <a href='/' style={{
                            fontStyle:'italic',
                            background:'var(--darkgreen)',
                            padding: '.2rem 2rem 0 5px'
                            }}> IR A INICIO</a>
                        </p>
                    </div>
                </div>
                <div className='cont-ttwphone'>
                    <div style={{
                        border: '5px solid var(--yellow)',
                        width: '100%',
                        height: '100%'
                    }}>
                        <img alt="gif turtles" className='ttwphone' src={turtle_sent} />
                    </div>
                </div>

            </div>

            <Footer />
        </section>
    )
}

export default Landing