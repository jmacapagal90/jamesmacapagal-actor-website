import React, {useEffect} from 'react';
import AOS from "aos";

function Resume() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="resume" className="py-5 bg-light text-dark" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">Resume</h2>
                <ul className="list-unstyled">
                    <li><strong>Actors Access</strong> </li>
                    <li><strong>IMDB</strong></li>
                    <li><strong>Casting Networks</strong></li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;
