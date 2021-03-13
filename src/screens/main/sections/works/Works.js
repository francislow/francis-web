import React from 'react'
import './works.css'
import myworks_nav_icon_active from "../../../../library/assets/images/myworks_nav_active.png";
import SectionLabel from "../../../../library/components/section_label/SectionLabel"
import projectsData from '../../../../library/assets/catalogue/projectsData';
import ProjectItem from "../../../../library/components/project_item/ProjectItem"

function About() {
    function renderAllProjectItems() {
        return projectsData.map(data => {
            return <ProjectItem
                projectThumbnail={data.thumbnailImageUrl}
                projectName={data.name} 
                projectType={data.type} 
                projectDesc={data.desc} 
                projectTimeline={data.timeline} 
                projectDevTools={data.devTools} 
                playstoreUrl={data.playstoreUrl} 
                appstoreUrl={data.appstoreUrl}
            />
        })
    }
    return (
        <div className="works-page-wrapper section">
            <div className="works-header">
                <SectionLabel iconUrl={myworks_nav_icon_active} titleNormal="My " titleHighlight="Works"/>
            </div>
            <div className="project-wrapper">
                {renderAllProjectItems()}
            </div>
        </div>
    )
}

export default About
