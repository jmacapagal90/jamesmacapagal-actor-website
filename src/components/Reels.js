import React, {useEffect, useState} from 'react';
import Card from 'bootstrap';
import AOS from "aos";

function Reels() {
    const [youtubeLinkIndex, setYoutubeLinkIndex] = useState(0)
    const reels = [
        "https://www.youtube.com/embed/qZb6jWBPA4s?si=nowoDQBTMI81WN2I",
        "https://www.youtube.com/embed/zSENWa2jTHU?si=CY5FCO9_BkkH-Kxe",
        "https://www.youtube.com/embed/SXTz5xzcbWw?si=A75Uvf7Yp6AsbpDw",
        "https://www.youtube.com/embed/jS2Q6Df4XrQ?si=_Lbnc7eVU63vAxmS",
        "https://www.youtube.com/embed/3dBN8aDEUBY?si=K-tqHZoxewaWF2aI",
        "https://www.youtube.com/embed/KKLx6jZ_0Rk?si=0Fc7OZi2NmIJ1peW"
    ]
    useEffect(() => {
        AOS.refresh();
    }, []);

    const youtubeCards = (i) =>  {
        return (
            <>
                <iframe width="560" height="315" src={i}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                </iframe>
            </>
        )
    }

    return (
        <section id="reels" className="py-5 bg-black text-white" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">Reels</h2>
                <p>Commercial/additional reels upon request.</p>
                {reels.map(i => (youtubeCards(i)))}
            </div>
        </section>
    );
}

export default Reels;
