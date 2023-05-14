import React from "react";
import img1 from "../images/tentang-saya-vektor.png";
import img2 from "../images/tentang-saya-img.png";
import { Link } from "react-scroll";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <div className="row">
          <div className="header-title">
            <h1>
              About <span className="ts-sub-title">Me</span>
            </h1>
            <p>Who am I ?</p>
          </div>
        </div>
        <div className="row tentang-saya-res">
          <div className="col-md">
            <div className="tentang-saya-kiri">
              <img className="img1" alt="img1" src={img1} />
              <img className="img2" alt="img1" src={img2} />
            </div>
          </div>
          <div className="col-md">
            <div className="tentang-saya-kanan">
              <p>
                Hello, my name is Diky Satria Ramadanu, I am a Full Stack
                Developer. I am from Aceh Indonesia, but currently I live in
                Jakarta
              </p>
              <p>
                I have 1 year experience as a Fullstack developer. There are
                some webiste application I have been created, started web design
                until web programming
              </p>
              <p>
                If you interest with me and want to cooperate with me, please
                call my contact
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
        </div>
      </div>
    </section>
  );
}
