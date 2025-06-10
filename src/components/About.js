import React, {useEffect} from 'react';
import AOS from "aos";

function About() {

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="about" className="py-5 bg-white text-dark" data-aos="fade-down">
            <div className="container">
                <h2 className="mb-4">About Me</h2>
                <p>
                    James is an actor, comedian, and writer, born and raised in Chicago and based in Los Angeles, and a proud graduate of The Annoyance Theatre improv program and Green Shirt Studio's Meisner program. James
                    was an understudy for The Second City's 110th Mainstage Review, <i>Do The Right Thing, No Worries If Not</i>, backing up the indelible Evan Mills and Louie Cordon. He was an actor, writer, and executive producer for the
                    iO Comedy Network team, <i>Overqualified</i>, and James is a proud founder and member of the all-Asian American improv group, <i>Club Asia</i>. James is also a proud ensemble member of <i>CIRCA Pintig</i>, one of the oldest
                    Filipino-American theatre groups in the U.S, starring in their original works, <i>Panther In The SKy</i> and <i>Game of Trolls</i>. James has also appeared on <i>Chicago Med</i> as the guy who served Dr. Mitchell Ripley (court papers, sadly not breakdancing).
                </p>
                <p>
                    When he's not writing or refining macrodata during his dayjob, he can be found cooking Filipino food and raising his three proud cat children with his wife.
                </p>
            </div>
        </section>
    );
}

export default About;
