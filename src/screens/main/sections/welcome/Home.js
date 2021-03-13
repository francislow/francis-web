import React from 'react'
import './home.css'

function Welcome() {
    function scrollToBioPage() {
    }

    return (
        <div id="home" className="welcome-page-wrapper">
            <p className="intro-header">Hello, I’m <span className="name-text">Francis</span></p>
            <p className="sub-intro">I love creating applications that add value to people's lives</p>
            <div onClick={scrollToBioPage} className="read-bio-button">
                <a href="#about">Read My Bio</a>
            </div>
        </div>
    )
}

export default Welcome
