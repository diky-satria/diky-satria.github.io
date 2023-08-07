import React from "react";
import portfolio1 from "../images/portfolio1.png";
import portfolio2 from "../images/portfolio2.png";
import portfolio3 from "../images/portfolio3.png";
import portfolio4 from "../images/portfolio4.png";
import portfolio5 from "../images/portfolio5.png";
import portfolio6 from "../images/portfolio6.png";
import portfolio7 from "../images/portfolio7.png";
import { Link } from "react-scroll";
import { downloadFileAtURL } from "../helpers/helpers";

export default function Portfolio() {
  const URL_KASIR = `${process.env.REACT_APP_URL_CLIENT}/kasir.pdf`;
  const URL_BLOG = `${process.env.REACT_APP_URL_CLIENT}/blog.pdf`;
  const URL_PRESENSI = `${process.env.REACT_APP_URL_CLIENT}/presensi.pdf`;

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
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={4}
                aria-label="Slide 5"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={5}
                aria-label="Slide 6"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={6}
                aria-label="Slide 7"
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
                        for user the access.{" "}
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
                        This is a admin dashboard that I build with React JS and{" "}
                        <b>Bootstrap 4.</b> It's already responsive for each
                        size such as website, tablet and smartphone.
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
                        This is a admin dashboard that I build with React JS and{" "}
                        <b>Bootstrap 5.</b> There is a little bit improvment in
                        navbar part, available search input. It's already
                        responsive for each size such as website, tablet and
                        smartphone.
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
              <div className="carousel-item portfolio-item">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="portfolio-gambar">
                      <img
                        src={portfolio5}
                        className="d-block w-100"
                        alt="portfolio5"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="portfolio-detail">
                      <h2 className="p-title">Blog</h2>
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
                        Bootstrap 5
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Ant Design
                      </span>
                      <p>
                        This is a blog website application, you can write and
                        share knowladge if you want by this website. it's have 2
                        role access, admin and user.{" "}
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
                        for the user access.{" "}
                        <a
                          href="https://blog.dikysatria.net/auth"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            marginRight: "10px",
                            marginBottom: "10px",
                            textDecoration: "none",
                          }}
                        >
                          Go to login page
                        </a>
                      </p>
                      <a
                        href="https://blog.dikysatria.net/"
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
                        onClick={() => downloadFileAtURL(URL_BLOG)}
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        PDF Documentation
                      </button>
                      <a
                        href="https://github.com/diky-satria/fullstack-blog"
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
                        src={portfolio6}
                        className="d-block w-100"
                        alt="portfolio6"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="portfolio-detail">
                      <h2 className="p-title">Modern Admin Dashboard 3</h2>
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
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Typescript
                      </span>
                      <p>
                        This is a admin dashboard that I build with React JS,
                        Bootstrap 5 and <b>Typescript.</b> It's already
                        responsive for each size such as website, tablet and
                        smartphone.
                      </p>
                      <a
                        href="https://bootstrap5ts.dikysatria.net/"
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
                        href="https://github.com/diky-satria/react-dashboard-boots5-typescript"
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
                        src={portfolio7}
                        className="d-block w-100"
                        alt="portfolio7"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="portfolio-detail">
                      <h2 className="p-title">Employes Presensi</h2>
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
                        Bootstrap 5
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Ant design
                      </span>
                      <span
                        className="badge rounded-pill bg-primary"
                        style={{ marginRight: "2px", fontSize: "10px" }}
                      >
                        Typescript
                      </span>
                      <p>
                        This is a website presensi application base on take a
                        picture and location. It's have 2 role access, admin dan
                        user.{" "}
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
                        for the user access.{" "}
                      </p>
                      <a
                        href="https://presensi.dikysatria.net/"
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
                        onClick={() => downloadFileAtURL(URL_PRESENSI)}
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        PDF Documentation
                      </button>
                      <a
                        href="https://github.com/diky-satria/fullstack-presensi"
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
