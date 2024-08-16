import React from 'react'
import nuff from '../resources/project/nuff.jpg'
import sakura from '../resources/project/sakura.png'
import fugaz from '../resources/project/fugaz.jpg'

function Projects() {
    return (
        <section id='Projects'>
            <div className='col'>
                <div className='row'>
                    <a target="_blank" href='https://www.behance.net/gallery/153559705/Fugaz-Pizzeria-Punk-Branding-Concept' className='project-box'>
                        <div className="overlay" />
                        <img
                            src={fugaz}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </a>
                </div>
                <div className='row'>
                    <a target="_blank" href='https://www.behance.net/gallery/192032619/Sakura-Vivero-Rebranding-Project' className='project-box'>
                        <div className="overlay" />
                        <img
                            src={sakura}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </a>
                </div>
            </div>
            <div className='col'>
                <a target="_blank" href='https://www.behance.net/gallery/156818073/NUFF-Comics-Books-Branding-and-Identity-Design' className='project-box'>
                    <div className="overlay" />

                    <img
                        src={nuff}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </a>
            </div>
        </section>
    )
}

export default Projects