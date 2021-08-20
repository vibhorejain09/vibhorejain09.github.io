import React from 'react'
import './Contact.css'
import imgcontact from '../../Assets/contactimg.svg'
import windowWidth from '../../Utils/windowWidth'
import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {
    const width = windowWidth()
    const halfWidth = width / 2;
    return (
        <ScrollAnimation animateIn='fadeIn' delay={200}>
            <div id="contact">
                <div className="heading">
                    <span style={{ borderBottom: '2px solid rgb(var(--secondary-text-color))' }}>
                        Contact
                    </span>
                </div>
                <div className="contact-content" style={{ flexDirection: halfWidth > 500 ? "row" : "column", justifyContent: halfWidth > 500 ? "space-around" : "center" }}>
                    <div>
                        <img src={imgcontact} alt="conimg" style={{ width: halfWidth > 500 ? halfWidth * 0.5 : width * 0.5 }} className="conatct-content-image" />
                    </div>
                    <div className="contact-content-details">
                        <p style={{ maxWidth: "500px" }}>
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

export default Contact