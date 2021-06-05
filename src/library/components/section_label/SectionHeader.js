import React from 'react'
import './sectionheader.css'

function SectionHeader({ children, title }) {
    return (
        <div className="section-header">
            <p>{title}</p>
            <div className="children-wrapper">
                {children}
            </div>
            <div className="header-divider"></div>
        </div>
    )
}

export default SectionHeader
