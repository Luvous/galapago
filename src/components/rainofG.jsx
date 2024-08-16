import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RainOfG = () => {
    const [letters, setLetters] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const generateLetters = () => {
            const newLetters = [];
            const letterCount = isMobile ? 50 : 100; // Menor cantidad de letras en móviles
            for (let i = 0; i < letterCount; i++) {
                newLetters.push({
                    id: i,
                    size: Math.random() * (isMobile ? 60 : 110) + (isMobile ? 20 : 40), // Tamaño menor en móviles
                    left: Math.random() * (isMobile ? 80 : 100), // Posición left menor en móviles
                    duration: Math.random() * 15 + 10,
                    style: Math.random() > 0.5 ? 'stroke' : 'fill',
                    blendMode: Math.random() > 0.5 ? 'normal' : 'color-dodge',
                });
            }
            setLetters(newLetters);
        };

        generateLetters();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return (
        <div className="rain-container">
            {letters.map((letter) => (
                <motion.div
                    key={letter.id}
                    className={`letter ${letter.style} ${letter.blendMode}`}
                    style={{
                        fontSize: `${letter.size}px`,
                        left: `${letter.left}vw`,
                        willChange: 'transform',
                    }}
                    initial={{ y: '-30vh', rotate: 0 }}
                    animate={{ y: '50vh', rotate: 360 }}
                    transition={{
                        duration: letter.duration,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    G
                </motion.div>
            ))}
        </div>
    );
};

export default RainOfG;
