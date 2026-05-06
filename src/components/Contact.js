import React, {useEffect} from 'react';
import AOS from 'aos';

function Contact() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="contact" className="py-5 bg-black text-light" data-aos="fade-down">
            <div className="container">
                <p className="section-kicker">Contact</p>
                <h2 className="mb-4">For auditions, bookings, and representation inquiries.</h2>
                <div className="contact-grid">
                    <a className="contact-card" href={"mailto:jamesmacapagal@icloud.com"}>
                        <span>Direct</span>
                        <strong>jamesmacapagal@icloud.com</strong>
                    </a>
                    <a className="contact-card" href={"mailto:socaltalentagency@gmail.com"}>
                        <span>LA / ATB</span>
                        <strong>So Cal Talent</strong>
                    </a>
                    <a className="contact-card" href={"mailto:jaclyn@10mgmt.com"}>
                        <span>Chicago / Non-Union</span>
                        <strong>10 MGMT</strong>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
