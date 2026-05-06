import React, {useEffect} from 'react';
import AOS from "aos";

function Resume() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="profiles" className="py-5 bg-black text-white" data-aos="fade-down">
            <div className="container">
                <p className="section-kicker">Profiles</p>
                <h2 className="mb-4">Resume and casting profiles.</h2>
                <div className="profile-links">
                    <a target="_blank" rel="noreferrer" href="https://resumes.actorsaccess.com/jamesmacapagal">Actors Access</a>
                    <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm10395228/?ref_=ext_shr_lnk">IMDb</a>
                    <a target="_blank" rel="noreferrer" href="https://app.castingnetworks.com/talent/public-profile/e30288f0-f73e-11eb-b459-d1260cd4e210">Casting Networks</a>
                </div>
            </div>
        </section>
    );
}

export default Resume;
