import React, {useEffect, useState} from 'react';
import Card from 'bootstrap';
import AOS from "aos";

function Reels() {

    return (
        <section id="reels" className="py-5 bg-black text-white vw-100" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">Reels</h2>
                <p>Commercial/additional reels upon request.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hsDltqlULj4?si=0HiDReBSQvN4O2J3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    );
}

export default Reels;
