import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './Hero.css';

function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        {
            src: `${process.env.PUBLIC_URL}/James_Macapagal_Commercial_2026.jpg`,
            label: 'Commercial',
            alt: 'James Macapagal commercial headshot'
        },
        {
            src: `${process.env.PUBLIC_URL}/James_Macapagal_Theatrical_2026.jpg`,
            label: 'Theatrical',
            alt: 'James Macapagal theatrical headshot'
        },
        {
            src: `${process.env.PUBLIC_URL}/James_Macapagal_Commercial_Sports.jpg`,
            label: 'Commercial Sports',
            alt: 'James Macapagal commercial sports headshot'
        },
        {
            src: `${process.env.PUBLIC_URL}/James_Macapagal_Suit.jpg`,
            label: 'Suit',
            alt: 'James Macapagal suit headshot'
        },
        {
            src: `${process.env.PUBLIC_URL}/James_Macapagal_Theatrical_Character.jpg`,
            label: 'Theatrical Character',
            alt: 'James Macapagal theatrical character headshot'
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
                <h1>James Macapagal</h1>
                <div className="hero-actions">
                    <a className="primary-action" href="#reels">Watch Reel</a>
                    <a className="secondary-action" href="#contact">Contact</a>
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
                <div className="headshot-thumbs" aria-label="Featured headshots">
                    {images.map((image, index) => (
                        <button
                            key={image.label}
                            type="button"
                            className={`headshot-thumb ${index === currentImageIndex ? 'is-active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`Show ${image.label} headshot`}
                        >
                            <img src={image.src} alt="" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
