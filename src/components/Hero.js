import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './Hero.css';

function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        `${process.env.PUBLIC_URL}/James_Macapagal_Theatrical.jpg`,
        `${process.env.PUBLIC_URL}/James_Macapagal_Commercial.jpg`,
        `${process.env.PUBLIC_URL}/James_Macapagal_Comedic.jpg`
    ];

    useEffect(() => {
        AOS.refresh();
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="hero" className="hero-section">
            <img
                src={images[currentImageIndex]}
                alt="Hero Background"
                className="hero-img"
            />
        </section>
    );
}

export default Hero;
