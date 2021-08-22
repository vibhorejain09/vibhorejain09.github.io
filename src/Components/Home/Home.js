import React from 'react'
import './Home.css'
import homecover from '../../Assets/homecover.png'
import { GitHub, Instagram, Facebook, Email, LinkedIn } from "@material-ui/icons";
import Typewriter from "typewriter-effect";
import ScrollAnimation from 'react-animate-on-scroll';


function Home() {
    return (
        <ScrollAnimation animateIn='fadeIn' delay={200}>
            <section className="home">
                <article className="home-intro">
                    <h1 className="home-intro-heading">Vibhore Jain</h1>
                    <h4 className="home-intro-description">
                        I'm&nbsp; <Typewriter options={{ strings: ["a Student.", "a Learner.", "a Developer.",], autoStart: true, loop: true, }} />
                    </h4>
                    <ul className="home-intro-social-links">
                        <a href="https://github.com/vibhorejain09" target="_blank" className="home-social-link" rel="noreferrer">
                            <GitHub fontSize="large" />
                        </a>
                        <a href="https://www.linkedin.com/in/vibhore-jain" target="_blank" className="home-social-link" rel="noreferrer">
                            <LinkedIn fontSize="large" />
                        </a>
                        <a href="https://instagram.com/vibhorejain_0911" target="_blank" className="home-social-link" rel="noreferrer">
                            <Instagram fontSize="large" />
                        </a>
                        <a href="mailto:vibhore.jain.eng@gmail.com" target="_blank" className="home-social-link" rel="noreferrer">
                            <Email fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/vibhore.jain.902" target="_blank" className="home-social-link" rel="noreferrer">
                            <Facebook fontSize="large" />
                        </a>
                    </ul>
                </article>
                <img src={homecover} alt="home-cover" className="home-img-cover" />
            </section>
        </ScrollAnimation>
    )
}

export default Home