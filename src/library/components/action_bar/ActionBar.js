import React, { useState, useEffect } from 'react'
import './actionbar.css'
import home_nav_icon_active from "../../assets/images/home_nav_active.png";
import home_nav_icon_inactive from "../../assets/images/home_nav_inactive.png";
import about_nav_icon_active from "../../assets/images/about_nav_active.png";
import about_nav_icon_inactive from "../../assets/images/about_nav_inactive.png";
import myworks_nav_icon_active from "../../assets/images/myworks_nav_active.png";
import myworks_nav_icon_inactive from "../../assets/images/myworks_nav_inactive.png";
import connect_nav_icon_inactive from "../../assets/images/connect_nav_inactive.png";
import connect_nav_icon_active from "../../assets/images/connect_nav_active.png";
import navbar_stack_yellow from "../../assets/images/navbar_stack_yellow.png";


import NavLink from "./NavLink"

function ActionBar() {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        function trackScrolling() {
            const homePageRef = document.getElementById('home');
            if (homePageRef.getBoundingClientRect().bottom <= window.innerHeight + homePageRef.clientHeight * (4/5)) {
                setActiveSectionIndex(0)
            }
    
            const aboutPageRef = document.getElementById('about');
            if (aboutPageRef.getBoundingClientRect().bottom <= window.innerHeight + aboutPageRef.clientHeight * (4/5)) {
                setActiveSectionIndex(1)
            }
    
            const worksPageRef = document.getElementById('works');
            if (worksPageRef.getBoundingClientRect().bottom <= window.innerHeight + worksPageRef.clientHeight * (4/5)) {
                setActiveSectionIndex(2)
            }
    
            const footerPageRef = document.getElementById('footer');
            if (footerPageRef.getBoundingClientRect().bottom <= window.innerHeight + footerPageRef.clientHeight * (4/5)) {
                setActiveSectionIndex(3)
            }
        };

        document.addEventListener('scroll', trackScrolling);
    }, [])

  

    return (
        <>
            {/* Mobile */}
            <div className="action-bar-wrapper-mobile">
                <img src={navbar_stack_yellow} alt={navbar_stack_yellow} onClick={() => setIsOpened(true)} height="30px" />
                <div class={isOpened ? "appear" : "disappear"}>
                    <img src={navbar_stack_yellow} alt={navbar_stack_yellow} onClick={() => setIsOpened(false)} height="30px" />

                    <NavLink isSelected={activeSectionIndex === 0} inactiveImageUrl={home_nav_icon_inactive} activeImageUrl={home_nav_icon_active} title="Home" scrollToId="#home" />
                    <NavLink isSelected={activeSectionIndex === 1} inactiveImageUrl={about_nav_icon_inactive} activeImageUrl={about_nav_icon_active} title="About" scrollToId="#about"/>
                    <NavLink isSelected={activeSectionIndex === 2} inactiveImageUrl={myworks_nav_icon_inactive} activeImageUrl={myworks_nav_icon_active} title="My Works" scrollToId="#works"/>
                    <NavLink isSelected={activeSectionIndex === 3} inactiveImageUrl={connect_nav_icon_inactive} activeImageUrl={connect_nav_icon_active} title="Let's Connect" scrollToId="#footer" />
                </div>
            </div>

            {/* Desktop */}
            <div className="action-bar-wrapper">
                <NavLink isSelected={activeSectionIndex === 0} inactiveImageUrl={home_nav_icon_inactive} activeImageUrl={home_nav_icon_active} title="Home" scrollToId="#home" />
                <NavLink isSelected={activeSectionIndex === 1} inactiveImageUrl={about_nav_icon_inactive} activeImageUrl={about_nav_icon_active} title="About" scrollToId="#about"/>
                <NavLink isSelected={activeSectionIndex === 2} inactiveImageUrl={myworks_nav_icon_inactive} activeImageUrl={myworks_nav_icon_active} title="My Works" scrollToId="#works"/>
                <NavLink isSelected={activeSectionIndex === 3} inactiveImageUrl={connect_nav_icon_inactive} activeImageUrl={connect_nav_icon_active} title="Let's Connect" scrollToId="#footer" />
            </div>
        </>
    )   
}

export default ActionBar
