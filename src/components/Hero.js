import React, {useEffect, useState} from 'react';
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
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    const heroStyle = {
        backgroundImage: `url(${images[currentImageIndex]})`,
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