import React from 'react';
import './HeadshotGallery.css';

function HeadshotGallery() {
    const headshots = [
        ['James_Macapagal_Commercial_2026.jpg', 'Commercial'],
        ['James_Macapagal_Theatrical_2026.jpg', 'Theatrical'],
        ['James_Macapagal_Commercial_Sports.jpg', 'Commercial Sports'],
        ['James_Macapagal_Suit.jpg', 'Suit'],
        ['James_Macapagal_Theatrical_Character.jpg', 'Theatrical Character'],
        ['James_Macapagal_Commercial_2025.jpg', 'Commercial · 2025'],
        ['James_Macapagal_Theatrical_2025.jpg', 'Theatrical · 2025'],
        ['James_Macapagal_Comedic.jpg', 'Comedic'],
        ['James_Macapagal_Commercial.jpg', 'Commercial · Existing'],
        ['James_Macapagal_Theatrical.jpg', 'Theatrical · Existing']
    ];

    return (
        <section id="headshots" className="headshot-gallery">
            <div className="section-heading">
                <h2>Headshot Gallery</h2>
            </div>
            <div className="gallery-grid">
                {headshots.map(([filename, label]) => (
                    <figure className="gallery-card" key={filename}>
                        <img src={`${process.env.PUBLIC_URL}/${filename}`} alt={`James Macapagal ${label.toLowerCase()} headshot`} />
                    </figure>
                ))}
            </div>
        </section>
    );
}

export default HeadshotGallery;
