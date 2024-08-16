import React, { useEffect, useState } from 'react';

const CursorFollower = ({ size = 220 }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const handleMouseMove = (event) => {
            if (!isMobile) {
                setPosition({ x: event.clientX, y: event.clientY + scrollY });
            }
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
            setPosition((prevPosition) => ({
                ...prevPosition,
                y: prevPosition.y + (window.scrollY - scrollY)
            }));
        };

        const moveRandomly = () => {
            if (isMobile) {
                setPosition({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        let interval;
        if (isMobile) {
            interval = setInterval(moveRandomly, 500);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            if (interval) clearInterval(interval);
        };
    }, [scrollY, isMobile]);

    return (
        <div
            id="cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size}px`,
                height: `${size}px`,
                transform: 'translate(-50%, -50%)',
                borderRadius: '200px',
                willChange: 'transform',
                transition: isMobile ? 'all .9s ease' : 'none',
                display: `${scrollY >= 600 ? 'none' : 'inline'}`,
            }}
        />
    );
};

export default CursorFollower;
