import React from 'react'
import './actionbar.css'
import home_nav_icon_active from "../../assets/images/home_nav_active.png";
import home_nav_icon_inactive from "../../assets/images/home_nav_inactive.png";
import about_nav_icon_active from "../../assets/images/about_nav_active.png";
import about_nav_icon_inactive from "../../assets/images/about_nav_inactive.png";
import myworks_nav_icon_active from "../../assets/images/myworks_nav_active.png";
import myworks_nav_icon_inactive from "../../assets/images/myworks_nav_inactive.png";
import NavLink from "./NavLink"

function ActionBar() {
    return (
        <div className="action-bar-wrapper">
            <NavLink inactiveImageUrl={home_nav_icon_inactive} activeImageUrl={home_nav_icon_active} title="Home"/>
            <NavLink inactiveImageUrl={about_nav_icon_inactive} activeImageUrl={about_nav_icon_active} title="About"/>
            <NavLink inactiveImageUrl={myworks_nav_icon_inactive} activeImageUrl={myworks_nav_icon_active} title="My Works"/>
        </div>
    )   
}

export default ActionBar
