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
                        <img src={imgcontact} alt="conimg" style={{ width: halfWidth > 500 ? halfWidth * 0.5 : width * 0.4 }} className="conatct-content-image" />
                    </div>
                    <div className="contact-content-form">
                        <div className="contact-content-form-container">
                            <form name="contact" method="post">
                                <input type="hidden" name="form-name" value="contact" />
                                <div className="contact-content-form-group">
                                    <input type="text" name="name" placeholder="Name" className="contact-content-form-details" required />
                                    <input type="email" name="email" placeholder="E-mail" className="contact-content-form-details" required />
                                    <textarea type="text" name="message" placeholder="Message" rows="6" className="contact-content-form-details" required />
                                </div>
                                <button className="contact-form-btn">
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Contact