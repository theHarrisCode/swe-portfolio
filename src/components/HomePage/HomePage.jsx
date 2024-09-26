import React from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home"
import About from "../About/About"
import "./HomePage.styles.less";



function HomePage() {
    return (
        <>
            <div className="min-h-screen home-page-container">
                <div className="mx-auto text-white mt-5 header-title-text">theHarrisCode</div>
                <NavBar />
                <Home />
            </div>
            <div className="min-h-screen about-me-container">
                <About />
            </div>
        </>
    )
}

export default HomePage;