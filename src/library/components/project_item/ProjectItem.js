import React from 'react'
import './projectitem.css'
import { Link } from "react-router-dom";

import projects from '../../../library/assets/catalogue/projectsData';
import { FaArrowRight } from 'react-icons/fa';
import SkillsThumbnail from '../skills_thumbnail/SkillsThumbnail';

function ProjectItem({ isImageFirst, projectId }) {
    let {name, type, descriptions, devTools, images} = projects[projectId]
    let basicDesc = descriptions[0]

    function renderSkills() {
        return devTools.map(devTool => {
            return <SkillsThumbnail additionalClasses="margin-right-10 margin-top-5" name={devTool}/>
        })
    }

    return (
        <div className="project-item">
            <img style={{order: isImageFirst ? 0 : 2}} src={images[0]}></img>
            <div style={{order: 1}} className="spacing"></div>
            <div style={{order: isImageFirst ? 2 : 0}} className="summary-wrapper">
                <p className="title">{name}</p>
                <p className="type">{type}</p>
                <p className="desc">{basicDesc}</p>

                {/* Skills */}
                <div className="skills_wrapper">
                    {renderSkills()}
                </div>

                <Link to={`/main/content/projects/${projectId}`}>
                    <div class="view_more_btn">
                        <p>
                            View More
                        </p>
                        
                        <FaArrowRight />
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ProjectItem
