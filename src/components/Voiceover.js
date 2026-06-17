import React from 'react';
import './Voiceover.css';

function Voiceover() {

    return (
        <section id="voiceover" className="voiceover-section" data-aos="fade-down">
            <div className="section-heading">
                <p>Voiceover</p>
                <h2>Don't Fret</h2>
            </div>
            <div className="voiceover-video">
                <video
                    controls
                    preload="metadata"
                    playsInline
                    src={`${process.env.PUBLIC_URL}/James_Macapagal_VO_Dont_Fret.MOV`}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

export default Voiceover;
