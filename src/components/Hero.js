import React, { useEffect } from 'react';
import AOS from 'aos';
import './Hero.css';

function Hero() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    const heroStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/hero-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        height: '100vh',
        position: 'relative'
    };

    return (
        <section id="hero" style={heroStyle} className="text-white">
            <div className="hero-overlay"></div>
        </section>
    );
}

export default Hero;
