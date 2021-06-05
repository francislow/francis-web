import React, { useState, useEffect } from 'react'
import './actionbar.css'
import { BiHomeAlt, BiNetworkChart, BiWorld } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';


import NavLink from "./NavLink"

function ActionBar() {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        function trackScrolling() {
            const homePageRef = document.getElementById('home');
            if (homePageRef == null) return

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
                <div className="menu" onClick={() => setIsOpened(!isOpened)}>
                    <HiOutlineMenu />
                </div>
                <div class={isOpened ? "appear" : "disappear"}>
                    <div className="menu" onClick={() => setIsOpened(!isOpened)}>
                        <HiOutlineMenu />
                    </div>
                    <NavLink isActive={activeSectionIndex === 0} icon={<BiHomeAlt />} title="Home" scrollToId="#home" />
                    <NavLink isActive={activeSectionIndex === 1} icon={<AiOutlineUser />} title="About" scrollToId="#about" />
                    <NavLink isActive={activeSectionIndex === 2} icon={<BiNetworkChart />} title="My Works" scrollToId="#works" />
                    <NavLink isActive={activeSectionIndex === 3} icon={<BiWorld />} title="Let's Connect" scrollToId="#footer" />
                </div>
            </div>

            {/* Desktop */}
            <div className="action-bar-wrapper">
                <NavLink isActive={activeSectionIndex === 0} icon={<BiHomeAlt />} title="Home" scrollToId="#home" />
                <NavLink isActive={activeSectionIndex === 1} icon={<AiOutlineUser />} title="About" scrollToId="#about" />
                <NavLink isActive={activeSectionIndex === 2} icon={<BiNetworkChart />} title="My Works" scrollToId="#works" />
                <NavLink isActive={activeSectionIndex === 3} icon={<BiWorld />} title="Let's Connect" scrollToId="#footer" />
            </div>
        </>
    )   
}

export default ActionBar
