import React from 'react'
import './footer.css'
import insta_icon from "../../assets/images/insta_icon.png";
import github_icon from "../../assets/images/github_icon.png";
import mail_icon from "../../assets/images/mail_icon.png";
import linkedin_icon from "../../assets/images/linkedin_icon.png";
import copyright_icon from "../../assets/images/copyright_white.png";

import ProjectLabel1 from '../project_label_1/ProjectLabel1'

function Footer() {
    return (
        <div id="footer" className="footer-wrapper section">
            <div className="footer-deco-line"></div>
            <div className="footer_links">
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

            <ProjectLabel1 iconUrl={copyright_icon} labelTitle={'2021 Francis Low'} className="margin-top-35" />

        </div>
    )
}

export default Footer
