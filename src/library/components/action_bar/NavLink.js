import React from 'react'
import colors from "../../assets/colors"

function NavLink({ isActive, icon, title, scrollToId }) {
    return (
        <div className="action-bar-link">
            <a href={scrollToId}>
                {/* Navigation Icon */}
                <p style={{color: isActive ? colors.yellow : 'white', display: 'flex', alignItems: 'center', transition: 'all 0.4s'}}>
                    {icon}
                </p>

                {/* Navigation Title */}
                <p style={{color: `${isActive ? colors.yellow : "white"}`, transition: 'all 0.4s', marginLeft: '8px'}} >{title}</p>
            </a>
        </div>
    )
}

export default NavLink
