import React, {useEffect} from 'react';
import AOS from "aos";

function Reels() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="reels" className="py-5 bg-black text-white" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">Reels</h2>
                <h3>Demo Reel</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qZb6jWBPA4s?si=nowoDQBTMI81WN2I"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                </iframe>
                <p>Check out my performance reel above. More samples available on request.</p>
            </div>
        </section>
    );
}

export default Reels;
