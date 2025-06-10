import React, {useEffect} from 'react';
import AOS from 'aos';

function Contact() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="contact" className="py-5 bg-black text-light" data-aos="fade-down">
            <div className="container">
                <h1 className="mb-4">Contact Me</h1>
                <h5>Chicago - Non Union Commercial</h5>
                <p>Jaclyn Hergott | 10 MGMT</p>
                <p>jaclyn@10mgmt.com</p>
            </div>
        </section>
    );
}

export default Contact;
