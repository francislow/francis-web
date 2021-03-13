import React from 'react'
import './projectitem.css'
import android_logo from "../../assets/images/android_logo.png";
import ios_logo from "../../assets/images/ios_logo.png";
import tech_white from "../../assets/images/tech_white.png";
import calendar_white from "../../assets/images/calendar_white.png";

import nav_right_white from "../../assets/images/nav_right_white.png";
import Button1 from '../button_1/Button1'
import Button2 from '../button_2/Button2'
import ProjectLabel1 from '../project_label_1/ProjectLabel1'

function ProjectItem({ projectThumbnail, projectName, projectType, projectDesc, projectDevTools, playstoreUrl, appstoreUrl, projectTimeline }) {
    const imageWrapperStyle = {
        backgroundImage: `url(${projectThumbnail})`
    }

    function parseProjectDevTools() {
        let result = ""
        projectDevTools.forEach((devTool, index) => {
            index == projectDevTools.length - 1 ? result += devTool : result += devTool + ", "
        })

        return result
    }

    return (
        <div className="project-item">
            <div style={imageWrapperStyle} className="image-wrapper"></div>
            <div className="desc-wrapper">
                <div>
                    <p class="title">{projectName}</p>
                    <p class="type">{projectType}</p>
                    <ProjectLabel1 iconUrl={calendar_white} labelTitle={projectTimeline} className="margin-top-25"/>
                    <ProjectLabel1 iconUrl={tech_white} labelTitle={parseProjectDevTools()} className="margin-top-5"/>
                    <p class="desc">{projectDesc}</p>


                    {/* Google Playstore Button */}
                    {/* {playstoreUrl ? <Button1 className="margin-top-40" imageUrl={android_logo} buttonTitle="Download From Play Store"/> : <></>} */}
                    {/* Apple AppStore Button */}
                    {/* {appstoreUrl ? <Button1 className="margin-top-15" imageUrl={ios_logo} buttonTitle="Download From App Store"/> : <></>} */}
                </div>
                <Button2 className="margin-top-40" imageUrl={nav_right_white} buttonTitle="View More"/>
            
            </div>
        </div>
    )
}

export default ProjectItem
