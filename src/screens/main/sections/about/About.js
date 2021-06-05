import React from 'react'
import './about.css'
import francis_pic from "../../../../library/assets/images/francis_pic.png";
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import SectionHeader from "../../../../library/components/section_label/SectionHeader"
import resumeUrl from "../../../../library/assets/documents/Francis_Resume_8_3_2021.pdf";
import SkillsThumbnail from '../../../../library/components/skills_thumbnail/SkillsThumbnail';

function About() {
    function openResume() {
        window.open(resumeUrl);
    }

    return (
        <div id="about" className="about-page-wrapper section">
            <SectionHeader title="ABOUT ME">
                <p>Check out my resume <a onClick={openResume}>here.</a></p>
                
                {/* Social Links */}
                <div className="social-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/friendcislol/">
                        <AiOutlineInstagram />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/francislow/">
                        <AiFillGithub />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/francis-low-bb1b4079/">
                        <FaLinkedinIn />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:francislow_6@hotmail.com">
                        <FiMail />
                    </a>
                </div>
            </SectionHeader>
            <div className="about-content-wrapper">
                {/* General Text */}
                <p>
                    I graduated from{" "}
                    <a className="link-yellow" target="_blank" rel="noopener noreferrer" href="https://www.nus.edu.sg/">
                        National University of Singapore
                    </a>{" "}
                    in 2021. From this coming June, I will be working at{" "}
                    <a className="link-yellow" target="_blank" rel="noopener noreferrer" href="https://www.ufinity.com/">
                        Ufinity
                    </a>{" "}
                    in Singapore as a fullstack developer.
                </p>

                <div className="core">
                    {/* This actual image has rounded corners */}
                    <img src={francis_pic} alt='francis_pic'/>

                    <div className="details">
                        <p className="title">Why I love app development</p>
                        <p className="desc">
                            Its fun to see an idea take shape into something big and exciting and satisfying to build a product that can benefit the wider community.
                        </p>

                        <p className="title margin-top-35">Frameworks that I use frequently</p>
                        <div className="thumbnails_wrapper">
                            <SkillsThumbnail name="VueJS" additionalClasses="margin-right-10 margin-top-5"/>
                            <SkillsThumbnail name="ReactJS" additionalClasses="margin-right-10 margin-top-5"/>
                            <SkillsThumbnail name="React Native" additionalClasses="margin-right-10 margin-top-5"/>
                            <SkillsThumbnail name="NativeScript" additionalClasses="margin-right-10 margin-top-5"/>
                            <SkillsThumbnail name="ExpressJS" additionalClasses="margin-top-5"/>
                        </div>

                        <p className="title margin-top-35">Stay updated!</p>
                        <p className="desc">
                            I will be updating this site as I go about my coding adventure (i.e. career progression and side projects). {/* Feel free to subscribe{" "}
                            <a style={{backgroundColor: 'cyan'}} className="link-yellow" target="_blank" rel="noopener noreferrer" href="#">
                                    here 
                            </a>{" "}
                            to stay updated! */}
                        </p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default About
