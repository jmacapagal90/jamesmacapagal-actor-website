import React, {useEffect} from 'react';
import AOS from "aos";

function Hero() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="hero" className="d-flex align-items-center justify-content-center vh-100 bg-light text-center" data-aos="fade-down">
            <div className="container">
                <h1 className="display-3">james macapagal</h1>
                <p className="lead">100% organic, Chicago-raised, and LA sun-kissed Filipino-American human.
                </p>
            </div>
        </section>
    );
}

export default Hero;
