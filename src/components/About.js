import React, {useEffect} from 'react';
import AOS from "aos";

function About() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="about" className="py-5 bg-black text-white" data-aos="fade-down">
            <div className="container">
                <div className="about-grid">
                    <div>
                        <p className="section-kicker">About</p>
                        <h2 className="mb-4">Actor based in Los Angeles.</h2>
                    </div>
                    <div className="about-copy">
                        <p>
                            James is an actor born and raised in Chicago and based in Los Angeles. His work spans comedy, theater, and commercial film.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
