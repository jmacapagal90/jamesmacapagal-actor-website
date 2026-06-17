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
                        <h2 className="mb-4">Comedy timing, theatrical training, on-camera presence.</h2>
                    </div>
                    <div className="about-copy">
                        <p>
                            James is an actor, comedian, and writer, born and raised in Chicago and based in Los Angeles. He trained at <i>The Annoyance Theatre</i>, <i>Green Shirt Studio</i>, and <i>Green Room Chicago</i>, and continues on-camera training at <i>The BGB Studio</i> in Sydney Walsh's On-Camera Workout class.
                        </p>
                        <p>
                            His background spans Second City, iO Comedy Network, Club Asia, CIRCA Pintig, and a television appearance on <i>Chicago Med</i>.
                        </p>
                        <p>
                            He brings a grounded, specific, and playful point of view to comedy, theatrical, and commercial work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
