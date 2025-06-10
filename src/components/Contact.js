import React, {useEffect} from 'react';
import AOS from 'aos';

function Contact() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="contact" className="py-5 bg-light text-dark" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">Contact Me</h2>
                <form action="https://formspree.io/f/your-id" method="POST">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="_replyto" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
