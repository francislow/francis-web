import React, { useState } from 'react'
import colors from "../../assets/colors"

function NavLink({ activeImageUrl, inactiveImageUrl, title }) {
    const [isSelected, setIsSelected] = useState(false);

    const titleStyle = {
        // getComputedStyle(document.documentElement).getPropertyValue('--color-yellow') getting color from css variable
        color: `${isSelected ? "white" : colors.yellow}`,
    }

    function onMouseOver() {
        setIsSelected(true)
    }

    function onMouseOut() {
        setIsSelected(false)
    }


    return (
        <div className="action-bar-link" onMouseOver={onMouseOver} onMouseOut={onMouseOut} >
            {/* Navigation Icon */}
            {isSelected ? 
                <img src={activeImageUrl} alt={activeImageUrl} height="16px"/> : 
                <img src={inactiveImageUrl} alt={inactiveImageUrl} height="16px"/>
            }

            {/* Navigation Title */}
            <p style={titleStyle} >{title}</p>
        </div>
    )
}

export default NavLink
