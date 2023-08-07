import React from "react";
import img1 from "../images/home-vektor.png";
import img2 from "../images/home-img.png";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="container">
          <div className="row home-res">
            <div className="col-md-7">
              <div className="home-kiri">
                <h1 className="h1-1">
                  Hello, it's me{" "}
                  <span className="home-nama">Diky Satria Ramadanu</span>
                </h1>
                <h1 className="h1-2">Full Stack Developer</h1>
                <p className="home-p">
                  This is my official portfolio website that showing all details
                  my experiences as a Full Stack Developer
                </p>
                <Link
                  className="btn btn-primary btn-edited trigger"
                  to="kontak"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  My Contact
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              <div className="home-kanan">
                <img className="img1" alt="img1" src={img1} />
                <img className="img2" alt="img2" src={img2} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
