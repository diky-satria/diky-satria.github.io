import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function Skill() {
  const accordionActive = (e) => {
    // remove all accordion active
    var type = document.getElementsByClassName("accordion-button");
    for (var i = 0; i < type.length; i++) {
      type[i].classList.remove("bg-awal");
      type[i].classList.remove("warna-awal");
    }

    // set one accordion active
    e.currentTarget.classList.add("bg-awal");
    e.currentTarget.classList.add("warna-awal");
  };

  return (
    <div className="skill" id="skill">
      <div className="container">
        <div className="row">
          <div className="header-title">
            <h1>Skills</h1>
            <p>What technology do I use ?</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="skill-content">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      onClick={(e) => accordionActive(e)}
                      className="accordion-button bg-awal warna-awal"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Front End
                      <BsFillArrowDownCircleFill className="ms-auto" />
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>Ajax</li>
                        <li>Bootstrap</li>
                        <li>Ant Design</li>
                        <li>React JS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      onClick={(e) => accordionActive(e)}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Back End
                      <BsFillArrowDownCircleFill className="ms-auto" />
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>Node JS</li>
                        <li>Express JS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      onClick={(e) => accordionActive(e)}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Database
                      <BsFillArrowDownCircleFill className="ms-auto" />
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>MYSQL</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      onClick={(e) => accordionActive(e)}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Version Control
                      <BsFillArrowDownCircleFill className="ms-auto" />
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Git</li>
                        <li>Github</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
