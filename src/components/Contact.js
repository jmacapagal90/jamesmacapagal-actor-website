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
                <strong><a href={"mailto:jamesmacapagal@icloud.com"}>jamesmacapagal@icloud.com</a></strong>
                <p></p>
                <strong>LA - ATB: <a href={"mailto:socaltalentagency@gmail.com"}>So Cal Talent</a></strong>
                <p></p>
                <strong>CHI - Non-Union: <a href={"mailto:jaclyn@10mgmt.com"}>10 MGMT</a></strong>
            </div>
        </section>
    );
}

export default Contact;
