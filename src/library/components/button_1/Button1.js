import React from 'react'
import './button1.css'

function ButtonType1({ imageUrl, buttonTitle, className }) {
    return (
        <div className={`button1_wrapper ${className}`}>
            <img src={imageUrl} alt={imageUrl} height="16px"/>
            <p>{buttonTitle}</p>
        </div>
    )
}

export default ButtonType1
