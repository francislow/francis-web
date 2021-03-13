import React, { useState } from 'react'
import colors from "../../assets/colors"

function NavLink({ activeImageUrl, inactiveImageUrl, title, scrollToId, isSelected }) {
    const [isHovered, setIsHovered] = useState(false);

    const titleStyle = {
        // getComputedStyle(document.documentElement).getPropertyValue('--color-yellow') getting color from css variable
        color: `${isHovered || isSelected ? "white" : colors.yellow}`,
    }

    function onMouseOver() {
        setIsHovered(true)
    }

    function onMouseOut() {
        setIsHovered(false)
    }


    return (
        <div className="action-bar-link" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <a href={scrollToId}>
                {/* Navigation Icon */}
                {isHovered || isSelected ?
                    <img src={activeImageUrl} alt={activeImageUrl} height="16px"/> : 
                    <img src={inactiveImageUrl} alt={inactiveImageUrl} height="16px"/>
                }

                {/* Navigation Title */}
                <p style={titleStyle} >{title}</p>
            </a>
        </div>
    )
}

export default NavLink
