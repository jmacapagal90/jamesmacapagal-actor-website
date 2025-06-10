import React, { useEffect } from 'react';
import AOS from 'aos';
import './Hero.css'; // keep for .hero-overlay etc.

function Hero() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    const heroStyle = {
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        height: '100vh',
        position: 'relative'
    };

    return (
        <section id="hero" style={heroStyle} className="text-white d-flex align-items-center justify-content-center text-center">
            <div className="hero-overlay">
                <div className="container">
                    <h1 className="display-3" data-aos="zoom-in">james macapagal</h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;
