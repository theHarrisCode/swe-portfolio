import React from "react";
import "./About.styles.less";
import liberia from "../../assets/images/Flag-Liberia.webp";
import statpad from "../../assets/images/stat-pad-black-heavy_light.png";


function About() {
    return (
        <div className="min-w-full">
            <div className="mt-5 min-w-max about-me-text-container">
                <h1 className="mx-auto text-black about-me-text" id="page-titles">Who Am I?</h1>
            </div>
            <div className="flex flex-col min-h-full about-me-info">
                <div className="flex flex-row top-inner-container">
                    <div className="flex justify-center w-1/2 inline left-inner-container">
                        <div id="rec-card-container">
                            <div className="inline-block title" id="about-titles">Hometown</div>
                            <img src={ liberia } alt="pic" />
                            <p>Born in USA. Heritage from Liberia. Live in Rhode Island, Love for technology through video games. Coded in high school. Continued in college. </p>
                        </div>
                    </div>
                    <div className="flex justify-center w-1/2  right-inner-contaier">
                        <div id="rec-card-container">
                            <div className="title" id="about-titles">Experience</div>
                            <img src="" alt="working" />
                            <p>lorem ispum</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bottom-inner-container">
                    <div id="rec-card-container">
                        <div className="title" id="about-titles">What I'm Up To Now</div>
                        <img src={ statpad } alt="statPad" />
                        <p>lorem ispum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;