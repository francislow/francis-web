import React from 'react'
import './projectlabel1.css'

function ProjectLabel1({iconUrl, labelTitle, className}) {
    return (
        <div className={`project-label-1 ${className}`}>
            <img src={iconUrl} alt={iconUrl}/>
            <p>{labelTitle}</p>
        </div>
    )
}

export default ProjectLabel1
