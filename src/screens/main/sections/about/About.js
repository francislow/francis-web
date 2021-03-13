import React from 'react'
import './about.css'
import about_nav_icon_active from "../../../../library/assets/images/about_nav_active.png";
import francis_pic from "../../../../library/assets/images/francis_pic.png";
import insta_icon from "../../../../library/assets/images/insta_icon.png";
import github_icon from "../../../../library/assets/images/github_icon.png";
import mail_icon from "../../../../library/assets/images/mail_icon.png";
import linkedin_icon from "../../../../library/assets/images/linkedin_icon.png";
import document_icon from "../../../../library/assets/images/document_icon_black.png";
import SectionLabel from "../../../../library/components/section_label/SectionLabel"
import resumeUrl from "../../../../library/assets/documents/Francis_Resume_8_3_2021.pdf";

function About() {
    function navToResumePage() {
        window.open(resumeUrl);
    }

    return (
        <div id="about" className="about-page-wrapper section">
            <div className="about-header">
                {/* Section Label */}
                <SectionLabel iconUrl={about_nav_icon_active} titleNormal="My " titleHighlight="Bio"/>
                {/* Resume Button */}
                <div onClick={navToResumePage} className="resume-button">
                    <img src={document_icon} alt={document_icon} width="15px"/>
                    <p>View My Resume</p>
                </div>
            </div>
            <div className="about-content">
                <div>
                    {/* Bio Text */}
                    <p>
                        I am a final year student at{" "}
                        <a style={{color: 'white', textDecoration: "underline"}} target="_blank" rel="noopener noreferrer" href="http://www.nus.edu.sg/">
                            National University of Singapore
                        </a>
                        , passionate about web and mobile application development.<br/><br/>
                        As an aspiring full-stack developer, it is the thrill of creating something impactful 
                        that gives me a sense of fulfillment. It gives me much satisfaction seeing a product 
                        take shape from merely an idea to its final form.<br/><br/>
                        Also, I firmly believe there are three key elements to excel in any work we do; a clear 
                        sense of direction, good execution and facing obstacles with grit.
                    </p>
                    {/* Social Links */}
                    <div className="about-social-links">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/friendcislol/">
                            <img src={insta_icon} alt='insta_icon' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/francislow/">
                            <img src={github_icon} alt='github_icon' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/francis-low-bb1b4079/">
                            <img src={linkedin_icon} alt='linkedin_icon' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:francislow_6@hotmail.com">
                            <img src={mail_icon} alt='linkedin_icon' />
                        </a>
                    </div>
                </div>

                {/* This actual image has rounded corners */}
                <img src={francis_pic} alt='francis_pic'/>
            </div>
        </div>
    )
}

export default About
