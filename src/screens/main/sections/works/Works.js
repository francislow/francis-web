import React from 'react'
import { Link } from "react-router-dom";

import './works.css'
import SectionHeader from "../../../../library/components/section_label/SectionHeader"
import projects from '../../../../library/assets/catalogue/projectsData';
import ProjectItem from "../../../../library/components/project_item/ProjectItem"

function About() {
    function renderAllProjectItems() {
        return Object.keys(projects).map(function(key, index) {
            return (
                <>
                    <ProjectItem
                        key={index}
                        projectId={key}
                        isImageFirst={index % 2 === 0 ? true : false}
                    />
                    {index !== Object.keys(projects).length - 1 ? <div style={{border: '1px solid #f0f0f0', margin: '70px 0'}}></div> : <></>}
                </>
            )

          });
    }
    return (
        <div id="works" className="works-page-wrapper section">
            <SectionHeader title="MY WORKS">
                <p>Notable projects that I worked on during my free time and while in NUS. Check out a more comprehensive project listing <Link to="/main/content">here.</Link></p>
            </SectionHeader>
            <div className="project-wrapper">
                {renderAllProjectItems()}
            </div>
        </div>
    )
}

export default About
