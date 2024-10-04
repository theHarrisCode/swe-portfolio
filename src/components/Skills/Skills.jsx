// import {useState } from 'react';
import './Skills.styles.less'

// import all the photos needed in one statement

// put the images in an object
const iconPictures = {
    test: 'test'
}

export default function Skills({ headerStyles }) {
    return (
        <>
            <>
                <div className="min-w-full">
                    <div className={headerStyles.divClass}>
                        <h1 className={headerStyles.h1Class}>Skills</h1>
                    </div>
                    <div>
                        <div className="flex flex-1 flex-row top-container">
                            <div id="left-right-container">
                                <div id="skills-container">
                                    <div className="skills-title">
                                        <h1>Main Compentences</h1>
                                    </div>
                                    <div id='skills-icon-pic-container'>

                                    </div>
                                </div>
                            </div>
                            <div id="left-right-container">
                                <div id="skills-container">
                                    <div className="skills-title">
                                        <h1>Exposure To</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-container">

                        </div>
                    </div>
                </div>
            </>
        </>
    )
}