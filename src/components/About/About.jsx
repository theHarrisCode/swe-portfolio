import React from "react";
import "./About.styles.less";
import liberia from "../../assets/images/Flag-Liberia.webp";
// import statpad from "../../assets/images/stat-pad-black-heavy_light.png";
import ric from "../../assets/images/ric-icon.jpg";


function About( { headerStyles } ) {
    return (
        <div className="min-w-full">
            <div className={headerStyles.divClass}>
                <h1 className={headerStyles.h1Class}>Who Am I?</h1>
            </div>
            <div className="flex flex-col min-h-full about-me-info">
                <div className="flex flex-row top-inner-container">
                    <div className="flex justify-center w-1/2 inline left-inner-container">
                        <div id="rec-card-container">
                            <div className="inline-block title" id="about-titles">Background</div>
                            <div id="rec-pic-text">
                                <img src={liberia} alt="pic" id="about-pic" />
                                <p id="about-text">
                                    I was born in the United States but my heritage is from Liberia.
                                    My love for technology started at young age with videos games and playing computer games
                                    and Since then my passion has grown into Software Engineering.
                                    When I'm not coding I like traveling with loved ones.
                                    I like to stay active whether it's in the gym or playing sports.
                                    I recently enrolled in fencing classes which I'm really
                                    looking forward to.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-1/2  right-inner-contaier">
                        <div id="rec-card-container">
                            <div className="title" id="about-titles">Experience</div>
                            <div id="rec-pic-text">
                                <img src={ric} alt="working" id="about-pic" />
                                <p id="about-text">
                                    I wrote my first program in high school for my robotics class and was amazed to know
                                    that objects could be moved by simply typing on your computer. This lead me to studying 
                                    computer science at Rhode Island College where I got introduced to concepts like
                                    algorithms and data structures. After graduating college I attened ALX, a remote bootcamp
                                    based in Africa. There I learned  concepts of system engineering in C & Linux. This 
                                    past year I was a fellow of Hack.Diversity and interned at CarGurus as a 
                                    Front-End Engineer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bottom-inner-container">
                    <div id="rec-card-container">
                        <div className="title" id="about-titles">What I'm Up To Now</div>
                        <div id="rec-pic-text" className="inner-rec-container">
                            {/* <div className="what-now-pic-container">
                                <img src={statpad} alt="statPad" id="about-pic" className="what-now-pic"/>
                            </div> */}
                            <p id="about-text" className="what-now-text">
                                As an engineer there is always something new to learn. My efforts lately have been going 
                                towards sharpening my skills of front-end development by continuing to learn JavaScript 
                                and React. I also will be getting more familiar with back-end development in Javascript 
                                as well in the upcoming weeks. These skills will contribute to a mobile/web app I plan 
                                to start building this year. Towards the end of the year I want do research in Artificial
                                Intelligence specifically Machine Learning and AI Predictive Modeling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;