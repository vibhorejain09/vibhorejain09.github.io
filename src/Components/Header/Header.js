import React, { useState } from 'react'
import { Menu, Close, Instagram, LinkedIn, Facebook, Twitter } from '@material-ui/icons'
import header_logo from '../../Assets/logo.svg'
import './Header.css'
import windowWidth from '../../Utils/windowWidth'
import useWindowHeight from '../../Utils/windowHeight'


function Header() {
    const width = windowWidth()
    const height = useWindowHeight()
    const [open, setOpen] = useState(false);
    return (
        <div style={{ position: "fixed", width: "100%" }}>
            <div id="collapsed-header" style={{ position: "absolute", width: width, height: height, top: open ? "0" : "-2000px", transition: "all 0.5s ease-in", display: width > 700 ? "none" : "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem 1rem" }}>
                    <div onClick={() => setOpen(false)} style={{ cursor: "pointer" }}>
                        <Close fontSize="large" />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "80%" }}>
                    <ul className="collapsed-header-nav-items">
                        <li >
                            About
                        </li>
                        <li >
                            Experience                            
                        </li>
                        <li >
                            Education
                        </li>
                        <li >
                            Skills
                        </li>
                        <li >
                            Projects
                        </li>
                        <li >
                            Contact
                        </li>
                    </ul>
                    <div className="collapsed-header-social-container">
                        <ul className="collapsed-header-social-links">
                            <li>
                                
                                    <LinkedIn fontSize="large" />
                                
                            </li>
                            <li>
                                
                                    <Instagram fontSize="large" />
                                
                            </li>
                            <li>
            
                                    <Twitter fontSize="large" />
                                
                            </li>
                            <li>
                                
                                    <Facebook fontSize="large" />
                                
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
                            <li >
                            About
                        </li>
                        <li >
                            Experience                            
                        </li>
                        <li >
                            Education
                        </li>
                        <li >
                            Skills
                        </li>
                        <li >
                            Projects
                        </li>
                        <li >
                            Contact
                        </li>
                        </ul> : <div onClick={() => setOpen(true)} style={{ cursor: "pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <Menu fontSize="large" />
                        </div>
                }
            </div>
        </div>
    )
}

export default Header