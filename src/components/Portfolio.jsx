import React from 'react'
import portfolio1 from '../images/portfolio1.png'
import portfolio2 from '../images/portfolio2.png'
import portfolio3 from '../images/portfolio3.png'
import portfolio4 from '../images/modern-admin.png'
import { Link } from 'react-scroll'

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
        <div className="container" style={{marginTop:'40px'}}>
            <div className="row">
                <div className="header-title">
                <h1>Portfolios</h1>
                <p>What webstite application I have been created ?</p>
                </div>
            </div>
            <div className="row">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{backgroundColor:'transparent'}}>
                    <div className="carousel-indicators" style={{position
                    :'relative',top:'110%'}}>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner portfolio-konten">
                        <div className="carousel-item portfolio-item active">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="portfolio-gambar">
                                        <img src={portfolio1} className="d-block w-100" alt="portfolio1" />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="portfolio-detail">
                                    <h2 className="p-title">Personal Landing Page</h2>
                                    <p>This is a personal website that showing detail of experiences job someone</p>
                                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="btn btn-primary btn-edited trigger">Live Demo <i className="bi bi-arrow-right-short" /></Link>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="carousel-item portfolio-item">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="portfolio-gambar">
                                        <img src={portfolio2} className="d-block w-100" alt="portfolio2" />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="portfolio-detail">
                                    <h2 className="p-title">Library Website Application</h2>
                                    <p>This is a website application that purpose to manage borrowing and returning the book. it is have 3 role access super admin, admin and user</p>
                                    <a href="http://lajaxpus.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-edited">Live Demo <i className="bi bi-arrow-right-short" /></a>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="carousel-item portfolio-item">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="portfolio-gambar">
                                        <img src={portfolio3} className="d-block w-100" alt="portfolio3" />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="portfolio-detail">
                                    <h2 className="p-title">Payroll Website Application</h2>
                                    <p>This is a website application that purpose to print the employes sallary slip. it is have 2 role access admin and user</p>
                                    <a href="http://lajaxpay.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-edited">Live Demo <i className="bi bi-arrow-right-short" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item portfolio-item">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="portfolio-gambar">
                                        <img src={portfolio4} className="d-block w-100" alt="portfolio4" />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="portfolio-detail">
                                    <h2 className="p-title">Modern Admin Dashboard</h2>
                                    <p>This is admin dashboard panel with modern theme</p>
                                    <a href="https://diky-satria.github.io/modern-admin-dashboard" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-edited">Live Demo <i className="bi bi-arrow-right-short" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}


