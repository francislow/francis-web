import React from 'react'
import './home.css'

function Welcome() {
    return (
        <div id="home" className="welcome-page-wrapper">
            <p className="intro-header">Hello, I’m <span className="name-text">Francis</span></p>
            <p className="sub-intro">I write code to add value to my world</p>
            <a href="#about" className="read-bio-button">
                Read My Bio
            </a>
        </div>
    )
}

export default Welcome
