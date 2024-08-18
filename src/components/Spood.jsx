import React from 'react';


function Spood({prompt}) {

    const contactPhrases = [
        "¿Necesitas un servicio personalizado? Contáctanos para que podamos asesorarte.",
        "¡Nos encantaría saber más sobre tu proyecto! Hablemos.",
        "¿Tienes una idea en mente? Estamos aquí para ayudarte.",
        "¿Listo para dar el siguiente paso? ¡Estamos aquí para ti!",
        "¿Buscas algo especial? ¡Hablemos y encontraremos la solución perfecta!",
        "¡Transformemos tu marca en una experiencia inolvidable! Escríbenos y empecemos hoy.",
        "¿Tu marca necesita un nuevo impulso? Estamos aquí para ayudarte. ¡Hablemos!",
        "¡Potencia tu presencia en redes con un branding que destaque! Contáctanos.",
        "¿Listo para llevar tu negocio al siguiente nivel? ¡Hablemos de cómo podemos ayudarte!",
        "Haz que tu marca brille. Conversemos sobre tus ideas.",
        "Démosle vida a tu visión. ¡Estamos a un mensaje de distancia!",
        "¿Quieres destacar en redes? Nosotros sabemos cómo. ¡Escríbenos!",
        "El branding de tus sueños comienza con un simple contacto. ¡Conversemos!",
        "Es el mejor momento para renovar la imagen de tus redes...",
        "¡Estás a un click de tener la imagen de marca que siempre soñaste!"
    ];

    const servicesPhrases = [
        "Descubre cómo nuestros servicios pueden llevar tu marca al siguiente nivel.",
        "¡Explora nuestras soluciones a medida para tu negocio! Ve a servicios.",
        "¿Buscas resultados? Conoce nuestros servicios y cómo podemos ayudarte.",
        "Nuestros servicios están diseñados para impulsar tu marca. ¡Conócelos!",
        "Transforma tu visión en realidad con nuestros servicios personalizados.",
        "¡Encuentra el servicio perfecto para ti! Descubre más en nuestra página de servicios.",
        "Potencia tu negocio con nuestros servicios especializados. ¡Visítanos!",
        "Descubre cómo podemos hacer que tu marca destaque. Conoce nuestros servicios.",
        "Servicios que se adaptan a tus necesidades. ¡Ve a servicios y encuentra el tuyo!",
        "Lleva tu negocio al siguiente nivel con nuestros servicios profesionales.",
        "¿Listo para un cambio? Descubre cómo nuestros servicios pueden ayudarte.",
        "Enfoca tu estrategia con nuestros servicios especializados. ¡Conócelos!",
        "Nuestros servicios están diseñados para hacer que tu marca brille. ¡Descúbrelos!",
        "Encuentra la solución que tu negocio necesita en nuestra página de servicios.",
        "Explora las opciones que tenemos para ti. Visita nuestros servicios."
    ];
    const phrases = prompt === 'contact' ? servicesPhrases : contactPhrases;
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    // Determinar la URL y el texto del enlace en función del prop 'prompt'
    const linkDetails = prompt === 'contact'
        ? { url: '/services', text: 'SERVICIOS' }
        : { url: '/contact', text: 'CONTACTO' };




    return (
        <div
            className='spood-container'>
            <p>{randomPhrase}</p>



            <a href={linkDetails.url} className='spoodcont'>

                <p>{linkDetails.text}</p>
            </a>

        </div>
    )
}

export default Spood;
