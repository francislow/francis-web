import React from 'react'
import './button2.css'

function ButtonType1({ imageUrl, buttonTitle, className }) {
    return (
        <div onClick={() => alert('This website is currently under maintenence')} className={`button2_wrapper ${className}`}>
            <p>{buttonTitle}</p>
            <img src={imageUrl} alt={imageUrl} height="16px"/>
        </div>
    )
}

export default ButtonType1
