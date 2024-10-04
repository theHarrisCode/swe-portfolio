import React from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home"
import About from "../About/About"
import "./HomePage.styles.less";
import medium from "../../assets/images/medium-round-icon.webp";
import cc from "../../assets/images/code-and-coffee-logo-transparent.png";
import Typewriter from "../Typewriter/Typewriter";
import Skills from "../Skills/Skills";

// Styles for the header title of each page
const headerStyles = {
    divClass: "mt-5 min-w-max",
    h1Class: "mx-auto text-black text-4xl"
}

function HomePage() {
    return (
        <div>
            <div className="cc-container">
                <a href="https://www.meetup.com/providence-code-coffee/">
                    <img src={ cc } alt="" className="cc-icon" id="sidebar-icon" />
                    <div className="cc-text" >
                        Check Out Code & Coffee PVD
                    </div>
                </a>
            </div>
            <div className="medium-container">
                <a href="https://medium.com/hack-diversity-movement/cohort-stories-meet-darren-ccb7953c73ab">
                    <img src={ medium } alt="" className="medium-icon" id="sidebar-icon" />
                    <div className="medium-text">
                        Check Out My Medium Post
                    </div>
                </a>
            </div>
            <div className="main-page-layout">
                <div className="min-h-screen home-page-container">
                    <div class="header-title-text">
                        <Typewriter text="thheHarrisCode"/>
                    </div>
                    <NavBar />
                    <Home />
                </div>
                <div className="flex min-h-screen about-me-container" id="about-section">
                    <About headerStyles={ headerStyles } />
                </div>
                <div className="min-h-screen" id="skills-section">
                    <Skills headerStyles={ headerStyles } />
                </div>
                <div className="min-h-screen" id="projects-section">
                    Projects
                </div>
                <div className="min-h-screen" id="resume-section">
                    Resume
                </div>
                <div className="min-h-screen" id="contact-section">
                    Contact Me
                </div>
            </div>
        </div>
    )
}

export default HomePage;