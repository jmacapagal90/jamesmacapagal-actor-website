import React, {useEffect} from 'react';
import AOS from "aos";

function Reels() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="reels" className="py-5 bg-white text-dark" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">Reels</h2>
                <div className="ratio ratio-16x9 mb-4">
                    <iframe
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="Reel"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>Check out my performance reel above. More samples available on request.</p>
            </div>
        </section>
    );
}

export default Reels;
