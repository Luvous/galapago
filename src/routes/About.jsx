import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import galapagoAbout from '../resources/about-turtle.png'
import Spood from '../components/Spood'

function About() {
    return (
        <section id='Services'>
            <NavBar />
            <div className='sections-sheet'>
                <div className='sections-top-img'>
                    <h2>NOSOTROS</h2>
                    <p>Descubrí por que somos la mejor opción.</p>
                </div>
                <div className='section-main'>
                    <img className='about-img'  alt='A glowing green tortoise from the galapago islands' src={galapagoAbout}/>
                    <div className='about-text-container'>
                    <p className='about-text'> Galapago nace de la idea de brindar a todas las marcas una presencia digital sólida y efectiva en un mundo conectado, dando la oportunidad tanto a empresas establecidas como a pequeños negocios o emprendedores. <br/><br/>
                        Fundada en 2020 por un desarrollador web apasionado por el diseño gráfico y el marketing, Galapago Studio se especializa en branding y marketing digital.<br/> <br/>
                        Creemos en la importancia de una huella digital única, memorable y accesible para cada marca.</p>
                    </div>
                </div>
            </div>
            <Spood />
            <Footer />
        </section>
    )
}

export default About