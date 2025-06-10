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
                <div className="ratio ratio-16x9 mb-4">
                    <iframe
                        src="https://www.youtube.com/embed/qZb6jWBPA4s"
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
