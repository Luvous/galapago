import React from 'react'
import landingback from '../resources/noise-background-quick.png';
import turtle_404 from '../resources/404.webp';
import CursorFollower from '../components/CursorFollower';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Landing() {


    return (
        <section id='404' >
        <NavBar />
        <div style={{minHeight:'100vh'}}>
        <img alt='background noise' className='noisebck' src={landingback} />
            <CursorFollower size={150} />
            <div className='shifting-text'>
                <h1 style={{color : 'var(--green)', fontSize:'8rem'}}> 404 :( </h1>

                <div className='subtext'>
                    <p>Página no encontrada.</p>
                </div>
            </div>
            <div className='cont-ttwphone'>
            <div style={{  
                border: '5px solid var(--yellow)',
                width: '100%',
                height: '100%'
            }}>
                <img alt="gif turtles" className='ttwphone' src={turtle_404} />
            </div>
            </div>

        </div>
          
            <Footer/>
        </section>
    )
}

export default Landing