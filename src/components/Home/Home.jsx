import React from "react";
import darren_photo from "../../assets/images/DH-Hack-2024.jpeg";
import "./Home.styles.less";
import Typewriter from "../Typewriter/Typewriter";


function Home() {
    return (
        <>
            <div className="mt-6 flex about-me-container">
                <div className="w-1/2 p-10">
                    <img
                        src={darren_photo}
                        alt="darren-pic"
                        className="rounded-3xl"
                    />
                </div>
                <div className="w-1/2 p-10 text-4xl leading-snug intro-text-container">
                    <Typewriter className=" intro-text" text="I 'm Darren Harris, Software Developer with an expertise in web development and a
                        specialization in Front End Development. I have strong interest in learning Backend Development and Artificial Predictive Modeling & Machine Learning." speed={ 50 }/>
                </div>
            </div>
        </>
    )
}

export default Home;