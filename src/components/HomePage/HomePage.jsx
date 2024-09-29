import React from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home"
import About from "../About/About"
import "./HomePage.styles.less";
import medium from "../../assets/images/medium-round-icon.webp";
import cc from "../../assets/images/code-and-coffee-logo-transparent.png";


function HomePage() {
    return (
        <div>
            <div className="cc-container">
                <a href="https://www.meetup.com/providence-code-coffee/">
                    <img src={ cc } alt="" className="cc-icon" id="sidebar-icon" />
                    <div className="cc-text">
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
                    <div className="mx-auto text-black mt-5 header-title-text">theHarrisCode</div>
                    <NavBar />
                    <Home />
                </div>
                <div className="flex min-h-screen about-me-container">
                    <About />
                </div>
                <div className="min-h-screen">
                    Skills
                </div>
                <div className="min-h-screen">
                    Projects
                </div>
                <div className="min-h-screen">
                    Resume
                </div>
                <div className="min-h-screen">
                    Contact Me
                </div>
            </div>
        </div>
    )
}

export default HomePage;