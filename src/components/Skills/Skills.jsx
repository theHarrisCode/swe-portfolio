// import {useState } from 'react';
import './Skills.styles.less'
import React from 'react'

// import all the photos needed in one statement
const images = require.context('../../assets/images/language-icon/', true, /\.(png|jpe?g|svg|webp)$/);

const imageList = images.keys().map((imagePath) => {
    console.log("image-path: ", imagePath)
    const category = imagePath.split('/')[1];

    return {
        src: images(imagePath),
        category,
    };
});

const language_array = {
    main: ['HTML/CSS', 'JavaScript', 'Linux', 'PostgreSQL', 'React'],
    exposure: ['C', 'Express.js', 'Heroku', 'Java', 'MongoDB', 'Node.js', 'Python'],
    interests: ['Back-end Development', 'Game Development', 'AI/Machine Learning']
}

function searchQuery(ele){
    return (`https://www.google.com/search?q=${ele}&oq=java&gs_lcrp
        =EgZjaHJvbWUyDAgAEEUYORixAxiABDIOCAEQRRgnGDsYgAQYigUyBggCEEUYPTIGCAMQRRg8MgYIBBBFGDwyBgg
        FEEUYQTIGCAYQRRhBMgYIBxBFGEHSAQg1MTE1ajBqMagCALACAA&sourceid=chrome&ie=UTF-8`)
}

export default function Skills({ headerStyles }) {
    const mainImages = imageList.filter(img => img.category === 'Main');
    const interestImages = imageList.filter(img => img.category === 'Interests');
    const exposureImages = imageList.filter(img => img.category === 'Exposure');

    return (
        <>
            <>
                <div className="min-w-full">
                    <div className={headerStyles.divClass}>
                        <h1 className={headerStyles.h1Class}>Skills</h1>
                    </div>
                    <div>
                        <div className="flex flex-1 flex-row top-container">
                            <div className="left-right-container">
                                <div className="skills-container">
                                    <div className="skills-title">
                                        <h1>Main Compentencies</h1>
                                    </div>
                                    <div className='skills-icon-pic-container' id='main-container'>
                                        {
                                            mainImages.map((image, index) => {
                                                return (
                                                    <div className="icon-pic-small-container">
                                                        <a href={searchQuery(language_array.main[index])}
                                                           className='flex justify-center items-center w-full h-full'>
                                                            <img src={image.src} alt="Exposure To" key={image.src} className='flex icon-pic' />
                                                            <p className='icon-text'>{language_array.main[index]}</p>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="left-right-container">
                                <div className="skills-container">
                                    <div className="skills-title">
                                        <h1>Exposure To</h1>
                                    </div>
                                    <div className='skills-icon-pic-container' id='exposure-container'>
                                        {
                                            exposureImages.map((image, index) => {
                                                return (
                                                    <div className="icon-pic-small-container">
                                                        <a href={searchQuery(language_array.exposure[index])}
                                                           className='flex justify-center items-center w-full h-full'>
                                                            <img src={image.src} alt="Exposure To" key={image.src} className='flex icon-pic' />
                                                            <p className='icon-text'>{language_array.exposure[index]}</p>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-container">
                            <div id="skills-container">
                                <div className="skills-title" id="interests-title">
                                    <h1>Technical Interests</h1>
                                </div>
                                <div className='skills-icon-pic-container' id='interests-container'>
                                    {
                                        interestImages.map((image, index) => {
                                            return (
                                                <div className="icon-pic-small-container">
                                                <a href={searchQuery(language_array.interests[index])}
                                                   className='flex justify-center items-center w-full h-full'>
                                                    <img src={image.src} alt="Exposure To" key={image.src} className='flex icon-pic' />
                                                    <p className='icon-text'>{language_array.interests[index]}</p>
                                                </a>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}