import React, {useEffect} from 'react';
import AOS from "aos";

function Resume() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="resume" className="py-5 bg-black text-white" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">Resume</h2>
                <ul className="list-unstyled">
                    <li><strong><a target="_blank" href="https://resumes.actorsaccess.com/jamesmacapagal">Actors Access</a></strong></li>
                    <li><strong><a target="_blank" href="https://www.imdb.com/name/nm10395228/?ref_=ext_shr_lnk">IMDB</a></strong></li>
                    <li><strong><a target="_blank" href="https://app.castingnetworks.com/talent/public-profile/e30288f0-f73e-11eb-b459-d1260cd4e210">Casting Networks</a></strong></li>
                </ul>
                <p>Writing samples upon request.</p>
            </div>
        </section>
    );
}

export default Resume;
