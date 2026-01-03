import React from 'react';
import './Reels.css';

function Reels() {

    return (
        <section id="reels" className="reels-section" data-aos="fade-down">
            <div className="reels-video">
                <iframe
                    src="https://www.youtube.com/embed/hsDltqlULj4?si=0HiDReBSQvN4O2J3"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        </section>
    );
}

export default Reels;
