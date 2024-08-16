import React from 'react'
import landingback from '../resources/noise-background-quick.png';
// import TortoiseWithPhone from '../resources/tortoisewithphone_filter.gif';
import turtle_1 from '../resources/turtle_1.webp';
import turtle_2 from '../resources/turtle_2.webp';
import turtle_3 from '../resources/turtle_3.webp';
import turtle_4 from '../resources/turtle_4.webp';
import turtle_5 from '../resources/turtle_5.webp';
import turtle_6 from '../resources/turtle_6.webp';
import CursorFollower from './CursorFollower';

import { TypeAnimation } from 'react-type-animation';

function Landing() {
    const gifs = [
        turtle_1,
        turtle_2,
        turtle_3,
        turtle_4,
        turtle_5,
        turtle_6,
    ];

    // Seleccionar un GIF aleatorio
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];



    return (
        <section id='Landing'>

            {/* <video preload="true" autoPlay muted className='noisebck' loop src={landingback} alt='noise' /> */}
            <img className='noisebck' src={landingback} />
            <CursorFollower size={150} />
            <div className='shifting-text'>
                <h1> <TypeAnimation
                    sequence={[
                        'DIGITALIZAMOS',
                        4000,
                        'POTENCIAMOS',
                        5000,
                        'CAMBIAMOS',
                        4000,
                        'CREAMOS',
                        5000,
                        'DESARROLLAMOS',
                        4000,
                        'IMPULSAMOS',
                        5000,
                        'DESPEGAMOS',
                        4000,
                        'DISEÑAMOS',
                        4000,
                    ]}
                    speed={32}
                    repeat={Infinity}
                    style={{ color: '#EBDE76' }}
                />

                    <br />
                    TU MARCA</h1>

                <div className='subtext'>
                    <p>Soluciones creativas para impulsar tu marca.</p>
                </div>
            </div>
            <div className='cont-ttwphone'>
            <div style={{  
                border: '5px solid var(--yellow)',
                width: '100%',
                height: '100%'
            }}>
                <img className='ttwphone' src={randomGif} alt='.' />
            </div>
            </div>

        </section>
    )
}

export default Landing