import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './Hero.css';

function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        {
            src: `${process.env.PUBLIC_URL}/James_Macapagal_Commercial_2025.jpg`,
            label: 'Commercial',
            alt: 'James Macapagal commercial headshot'
        },
        {
            src: `${process.env.PUBLIC_URL}/James_Macapagal_Theatrical_2025.jpg`,
            label: 'Theatrical',
            alt: 'James Macapagal theatrical headshot'
        },
        {
            src: `${process.env.PUBLIC_URL}/James_Macapagal_Comedic.jpg`,
            label: 'Comedic',
            alt: 'James Macapagal comedic headshot'
        }
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
            <div className="hero-copy" data-aos="fade-up">
                <p className="hero-kicker">Los Angeles / Chicago</p>
                <h1>James Macapagal</h1>
                <p className="hero-subtitle">Actor, comedian, and writer with sharp on-camera instincts and deep improv roots.</p>
                <div className="hero-actions">
                    <a className="primary-action" href="#reels">Watch Reel</a>
                    <a className="secondary-action" href="#contact">Contact</a>
                </div>
                <div className="quick-facts" aria-label="Industry quick facts">
                    <span>Actor</span>
                    <span>Comedian</span>
                    <span>Writer</span>
                    <span>Improv</span>
                </div>
            </div>

            <div className="headshot-showcase" data-aos="fade-left">
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
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        className="hero-img"
                    />
                    <span className="headshot-label">{images[currentImageIndex].label}</span>
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
                <div className="headshot-thumbs" aria-label="Headshot categories">
                    {images.map((image, index) => (
                        <button
                            key={image.label}
                            type="button"
                            className={`headshot-thumb ${index === currentImageIndex ? 'is-active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`Show ${image.label} headshot`}
                        >
                            <img src={image.src} alt="" />
                            <span>{image.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
