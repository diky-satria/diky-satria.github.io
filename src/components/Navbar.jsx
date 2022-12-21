import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)

    const changeNavbar = () => {
        if(window.scrollY > 50){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <div>
            <nav className={ navbar ? "navbar navbar-shrink fixed-top navbar-expand-lg" : "navbar fixed-top navbar-expand-lg" }>
                <div className="container">
                    <Link className="navbar-brand" to="home" spy={true} smooth={true} offset={-100} duration={500}>DIKY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <FiAlignJustify style={{color:'white'}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about-me" spy={true} smooth={true} offset={-100} duration={500}>About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="skill" spy={true} smooth={true} offset={0} duration={500}>Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="portfolio" spy={true} smooth={true} offset={0} duration={500}>Portfolios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="kontak" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
