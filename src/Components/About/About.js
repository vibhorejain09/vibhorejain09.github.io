import React from 'react'
import './About.css'
import imgabout from '../../Assets/aboutimage.png'
import windowWidth from '../../Utils/windowWidth'
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
    const width = windowWidth()
    const halfWidth = width / 2;
    return (
        <ScrollAnimation animateIn='fadeIn' delay={200}>
            <div id="about">
                <div className="heading">
                    <span style={{ borderBottom: '2px solid rgb(var(--secondary-text-color))' }}>
                        About
                    </span>
                </div>
                <div className="about-me" style={{ flexDirection: halfWidth > 500 ? "row" : "column", justifyContent: halfWidth > 500 ? "space-around" : "center" }}>
                    <div>
                        <img src={imgabout} alt="myimg" style={{ width: halfWidth > 500 ? halfWidth * 0.4 : width * 0.4 }} className="about-me-image" />
                    </div>
                    <div className="about-me-content">
                        <p style={{ maxWidth: "700px" }}>
                            A passionate programmer. Always eager to learn new
                            technologies. Third year student currently pursuing
                            my B.Tech in Computer Science from Shri Govindram
                            Seksaria Institute of Technology and Science, Indore.
                            I love to learn new things, always looking forword to improve
                            my skills. Loves to do coding on platform like Codechef, LeetCode,
                            GeeksForGeeks. Highest rating of 1690 on Codechef.
                        </p>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default About