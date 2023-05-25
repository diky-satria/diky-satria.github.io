import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DarkMode from "../components/DarkMode";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
      <DarkMode />
    </div>
  );
}
