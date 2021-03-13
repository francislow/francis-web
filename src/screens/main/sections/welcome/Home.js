import React from 'react'
import './home.css'

function Welcome() {
    function scrollToBioPage() {
    }

    return (
        <div id="home" className="welcome-page-wrapper">
            <p className="intro-header">Hello, I’m <span className="name-text">Francis</span></p>
            <p className="sub-intro">I love creating applications that add value to people's lives</p>
            <a href="#about">
                <div onClick={scrollToBioPage} className="read-bio-button">
                    Read My Bio
                </div>
            </a>
        </div>
    )
}

export default Welcome
