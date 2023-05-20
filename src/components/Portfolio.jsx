import React from "react";
import portfolio1 from "../images/portfolio1.png";
import portfolio2 from "../images/portfolio2.png";
import portfolio3 from "../images/portfolio3.png";
import portfolio4 from "../images/portfolio4.png";
import { Link } from "react-scroll";
import { downloadFileAtURL } from "../helpers/helpers";

export default function Portfolio() {
  const URL_KASIR = `${process.env.REACT_APP_URL_CLIENT}/kasir.pdf`;

  return (
    <section className="portfolio" id="portfolio">
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="header-title">
            <h1>Portfolios</h1>
            <p>What webstite application I have been created ?</p>
          </div>
        </div>
        <div className="row">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
            style={{ backgroundColor: "transparent" }}
          >
            <div
              className="carousel-indicators"
              style={{ position: "relative", top: "110%" }}
            >
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={3}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner portfolio-konten">
              <div className="carousel-item portfolio-item active">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="portfolio-gambar">
                      <img
                        src={portfolio1}
                        className="d-block w-100"
                        alt="portfolio1"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="portfolio-detail">
                      <h2 className="p-title">Personal Landing Page</h2>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        React JS
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Bootstrap 5
                      </span>
                      <p>
                        This is a personal website that showing detail of
                        experiences job someone
                      </p>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="btn btn-primary btn-edited trigger"
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Live Demo <i className="bi bi-arrow-right-short" />
                      </Link>
                      <a
                        href="https://github.com/diky-satria/diky-satria.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-edited-github"
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Github <i className="bi bi-arrow-right-short" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item portfolio-item">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="portfolio-gambar">
                      <img
                        src={portfolio2}
                        className="d-block w-100"
                        alt="portfolio2"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="portfolio-detail">
                      <h2 className="p-title">Cashier</h2>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Node JS
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Express JS
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        MYSQL
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        React JS
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Bootstrap 4
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Ant Design
                      </span>
                      <p>
                        This is a website application, it's my freelance project
                        for one of the clinic in Jakarta. it's have 2 role
                        access, admin and cashier.{" "}
                        <Link
                          className="trigger"
                          to="kontak"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          style={{
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          Contact me
                        </Link>{" "}
                        for user access.{" "}
                      </p>
                      <a
                        href="https://kasir.dikysatria.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-edited"
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Live Demo <i className="bi bi-arrow-right-short" />
                      </a>
                      <button
                        className="btn btn-primary btn-edited-documentation"
                        onClick={() => downloadFileAtURL(URL_KASIR)}
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        PDF Documentation
                      </button>
                      <a
                        href="https://github.com/diky-satria/fullstack-chasier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-edited-github"
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Github <i className="bi bi-arrow-right-short" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item portfolio-item">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="portfolio-gambar">
                      <img
                        src={portfolio3}
                        className="d-block w-100"
                        alt="portfolio2"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="portfolio-detail">
                      <h2 className="p-title">Modern Admin Dahsboard 1</h2>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        React JS
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Bootstrap 4
                      </span>
                      <p>
                        This is a admin dashboard that I build with React JS and
                        Bootstrap 4. It's already responsive for each size such
                        as website, tablet and smartphone.
                      </p>
                      <a
                        href="https://bootstrap4.dikysatria.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-edited"
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Live Demo <i className="bi bi-arrow-right-short" />
                      </a>
                      <a
                        href="https://github.com/diky-satria/react-dashboard-boots4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-edited-github"
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Github <i className="bi bi-arrow-right-short" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item portfolio-item">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="portfolio-gambar">
                      <img
                        src={portfolio4}
                        className="d-block w-100"
                        alt="portfolio2"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="portfolio-detail">
                      <h2 className="p-title">Modern Admin Dahsboard 2</h2>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        React JS
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Bootstrap 5
                      </span>
                      <p>
                        This is a admin dashboard that I build with React JS and
                        Bootstrap 5. There is a little bit improvment in navbar
                        part, available search input. It's already responsive
                        for each size such as website, tablet and smartphone.
                      </p>
                      <a
                        href="https://bootstrap5.dikysatria.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-edited"
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Live Demo <i className="bi bi-arrow-right-short" />
                      </a>
                      <a
                        href="https://github.com/diky-satria/react-dashboard-boots5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-edited-github"
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Github <i className="bi bi-arrow-right-short" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
