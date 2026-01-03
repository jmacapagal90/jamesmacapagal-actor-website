import React, {useEffect, useState} from 'react';
import Card from 'bootstrap';
import AOS from "aos";

function Reels() {
    const [youtubeLinkIndex, setYoutubeLinkIndex] = useState(0)
    const reels = [
        "https://youtu.be/hsDltqlULj4?si=PbwxqHAM29kyDuM6",
    ]
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="reels" className="py-5 bg-black text-white vw-100" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">Reels</h2>
                <p>Commercial/additional reels upon request.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/u_yvUtb1dSQ?si=seBkmoxDCVY33pdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    );
}

export default Reels;
