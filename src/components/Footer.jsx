import React from 'react'
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                <div className="footer-kiri">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="trigger" style={{cursor:'pointer'}}><h1>Diky</h1></Link>
                    <p>Full Stack Depelover</p>
                </div>
                </div>
                <div className="col-md-7">
                <div className="row">
                    <div className="col-md">
                        <Link className="trigger" to="home" spy={true} smooth={true} offset={-100} duration={500} style={{cursor:'pointer'}}>Home</Link>
                    </div>
                    <div className="col-md">
                        <Link to="about-me" spy={true} smooth={true} offset={-100} duration={500} className="trigger" style={{cursor:'pointer'}}>About Me</Link>
                    </div>
                    <div className="col-md">
                        <Link to="skill" spy={true} smooth={true} offset={0} duration={500} className="trigger" style={{cursor:'pointer'}}>Skills</Link>
                    </div>
                    <div className="col-md">
                        <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500} className="trigger" style={{cursor:'pointer'}}>Portfolios</Link>
                    </div>
                    <div className="col-md">
                        <Link to="kontak" spy={true} smooth={true} offset={0} duration={500} className="trigger" style={{cursor:'pointer'}}>Contact</Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="row mt4">
                <div className="col-md text-center">
                <div className="copy">
                    © copyright 2022 | created By Diky
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
