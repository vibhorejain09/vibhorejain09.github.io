import React, { useState } from 'react'
import { Menu, Close, Instagram, LinkedIn, Facebook, Email, GitHub } from '@material-ui/icons'
import header_logo from '../../Assets/logo.svg'
import './Header.css'
import windowWidth from '../../Utils/windowWidth'
import useWindowHeight from '../../Utils/windowHeight'
import MoveToTop from '../MoveToTop/MoveToTop'
import { Link } from 'react-scroll';

function Header() {
    const width = windowWidth()
    const height = useWindowHeight()
    const [open, setOpen] = useState(false);
    return (
        <div style={{ position: "fixed", width: "100%", zIndex: 999 }}>
            <MoveToTop open={open} />
            <div id="collapsed-header" style={{ position: "absolute", width: width, height: height, top: open ? "0" : "-2000px", transition: "all 0.5s ease-in", display: width > 700 ? "none" : "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem 1rem" }}>
                    <div onClick={() => setOpen(false)} style={{ cursor: "pointer" }} className="header-close-icon">
                        <Close fontSize="large" />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "80%" }}>
                    <ul className="collapsed-header-nav-items">
                        <li >
                            <Link activeClass='active-link' onClick={() => setOpen(false)} to='about' smooth={true} offset={-100} spy={true}>About</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link activeClass='active-link' onClick={() => setOpen(false)} to='experience' smooth={true} offset={-100} spy={true}>Experience</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link activeClass='active-link' onClick={() => setOpen(false)} to='education' smooth={true} offset={-100} spy={true} >Education</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link activeClass='active-link' onClick={() => setOpen(false)} to='skills' smooth={true} offset={-100} spy={true}>Skills</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link activeClass='active-link' onClick={() => setOpen(false)} to='projects' smooth={true} offset={-100} spy={true}>Projects</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link activeClass='active-link' onClick={() => setOpen(false)} to='contact' smooth={true} offset={-100} spy={true}>Contact</Link>
                        </li>
                    </ul>
                    <div className="collapsed-header-social-container">
                        <ul className="collapsed-header-social-links">
                            <li>
                                <a href="https://github.com/vibhorejain09" target="_blank" className="home-social-link" rel="noreferrer">
                                    <GitHub fontSize="large" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/vibhore-jain" target="_blank" className="home-social-link" rel="noreferrer">
                                    <LinkedIn fontSize="large" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/vibhorejain_0911" target="_blank" className="home-social-link" rel="noreferrer">
                                    <Instagram fontSize="large" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:vibhore.jain.eng@gmail.com" target="_blank" className="home-social-link" rel="noreferrer">
                                    <Email fontSize="large" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/vibhore.jain.902" target="_blank" className="home-social-link" rel="noreferrer">
                                    <Facebook fontSize="large" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="header" style={{
                justifyContent: "space-between",
                padding: width > 700 ? "0.75rem 1rem" : "0.75rem 1rem"
            }}>
                <div className="header-logo">
                    <img src={header_logo} height="50px" alt="header-logo" />
                </div>
                {
                    width > 700 ?
                        <ul className="header-nav-items">
                            <li>
                                <Link activeClass='active-link' onClick={() => setOpen(false)} to='about' smooth={true} offset={-100} spy={true}>About</Link>
                            </li>
                            <li>
                                <Link activeClass='active-link' onClick={() => setOpen(false)} to='experience' smooth={true} offset={-100} spy={true}>Experience</Link>
                            </li>
                            <li>
                                <Link activeClass='active-link' onClick={() => setOpen(false)} to='education' smooth={true} offset={-100} spy={true}>Education</Link>
                            </li>
                            <li>
                                <Link activeClass='active-link' onClick={() => setOpen(false)} to='skills' smooth={true} offset={-100} spy={true}>Skills</Link>
                            </li>
                            <li>
                                <Link activeClass='active-link' onClick={() => setOpen(false)} to='projects' smooth={true} offset={-100} spy={true}>Projects</Link>
                            </li>
                            <li>
                                <Link activeClass='active-link' onClick={() => setOpen(false)} to='contact' smooth={true} offset={-100} spy={true}>Contact</Link>
                            </li>
                        </ul> : <div onClick={() => setOpen(true)} style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} className="header-menu-icon">
                            <Menu fontSize="large" />
                        </div>
                }
            </div>
        </div>
    )
}

export default Header