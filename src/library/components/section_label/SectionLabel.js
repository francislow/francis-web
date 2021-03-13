import React from 'react'
import './sectionlabel.css'

function SectionLabel({ iconUrl, titleNormal, titleHighlight }) {
    return (
        <div className="section-label">
            <img src={iconUrl} alt={iconUrl}/>
            <p>{titleNormal}<span className="highlight">{titleHighlight}</span></p>
        </div>
    )
}

export default SectionLabel
