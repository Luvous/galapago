import React from 'react'

function Spood() {
    const phrases = [
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

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '0px 3rem',
                margin: '2rem 0'
            }}>
            <p style={{
                width: '60%',
                fontSize: '1.8rem'
            }}>{randomPhrase}</p>

            <div style={{
                paddingRight: '15px',
                fontStyle: 'italic',
                fontSize: '1.6rem',
                fontWeight: '400',
                lineHeight: '0',
                background: 'var(--darkgreen)'
            }}>
                <p>CONTACTO</p>
            </div>
        </div>
    )
}

export default Spood;
