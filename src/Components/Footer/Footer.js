import React from 'react'
import './Footer.css'
import windowWidth from '../../Utils/windowWidth'
import ScrollAnimation from 'react-animate-on-scroll';
import { GitHub, Instagram, Facebook, Email, LinkedIn, Phone } from "@material-ui/icons";
import { Divider } from '@material-ui/core'
import footerlogo from '../../Assets/logo.svg'
import heartimg from '../../Assets/heartfooter.png'


function Footer() {
    const width = windowWidth()
    return (
        <ScrollAnimation animateIn='fadeIn' delay={200}>
            <div id="footer">
                <div className="footer-content" style={{ flexDirection: width < 900 ? "column" : "row" }}>
                    <div className="footer-content-logo">
                        <img src={footerlogo} height="100px" alt="logofooter"></img>
                    </div>
                    <div className="footer-content-connect">
                        <div className="footer-content-connect-heading">
                            Connect With Me
                        </div>
                        <ul className="footer-content-connect-links">
                            <li>
                                <a href="https://github.com/vibhorejain09" target="_blank"  rel="noreferrer">
                                    <GitHub />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/vibhore-jain" target="_blank"  rel="noreferrer">
                                    <LinkedIn  />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/vibhorejain_0911" target="_blank"  rel="noreferrer">
                                    <Instagram  />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:vibhore.jain.eng@gmail.com" target="_blank"  rel="noreferrer">
                                    <Email  />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/vibhore.jain.902" target="_blank"  rel="noreferrer">
                                    <Facebook  />
                                </a>
                            </li>
                        </ul>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}><Phone fontSize={width < 900 ? "" : "large"} /><span style={{ marginLeft: "3px" }}><a href="tel:+919522343639">+91 9522343639</a></span></div>     
                        </div>
                    </div>
                    <div className="footer-content-made-with">
                        Made with <span><img src={heartimg} alt="imgheart" height="20px" id="footer-heart-img" /></span> In React
                    </div>
                </div>
                <Divider className="footer-content-divider" />
                <div className="footer-content-copyright">
                    &copy; {new Date().getFullYear().toString()}, Vibhore Jain. All Rights Reserved.
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Footer