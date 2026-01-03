import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './Hero.css';

function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        `${process.env.PUBLIC_URL}/James_Macapagal_Commercial_2025.jpg`,
        `${process.env.PUBLIC_URL}/James_Macapagal_Theatrical_2025.jpg`,
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
            <h2 className="hero-title">Headshots</h2>
            <div className="hero-frame">
                <button
                    type="button"
                    className="hero-nav hero-nav-left"
                    onClick={() =>
                        setCurrentImageIndex((prevIndex) =>
                            (prevIndex - 1 + images.length) % images.length
                        )
                    }
                    aria-label="Previous headshot"
                >
                    &#8249;
                </button>
                <img
                    src={images[currentImageIndex]}
                    alt="Headshot"
                    className="hero-img"
                />
                <button
                    type="button"
                    className="hero-nav hero-nav-right"
                    onClick={() =>
                        setCurrentImageIndex((prevIndex) =>
                            (prevIndex + 1) % images.length
                        )
                    }
                    aria-label="Next headshot"
                >
                    &#8250;
                </button>
            </div>
        </section>
    );
}

export default Hero;
