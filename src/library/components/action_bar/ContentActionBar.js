import React from 'react'
import {
    Link
  } from "react-router-dom";

import './content_actionbar.css'
import { HiChevronLeft } from 'react-icons/hi';

function ContentActionBar() {
    return (
        <div className="content-action-bar-wrapper">
            <div className="back-button">
                <Link to={`/main`}>
                    {/* Navigation Icon */}
                    <p style={{color: 'white', display: 'flex', alignItems: 'center', fontSize: '20px'}}>
                        <HiChevronLeft />
                    </p>

                    {/* Navigation Title */}
                    <p style={{color: "white", marginLeft: '8px'}} >Main</p>
                </Link>
            </div>
        </div>
    )   
}

export default ContentActionBar
