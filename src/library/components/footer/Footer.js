import React from 'react'
import './footer.css'
import { AiFillGithub, AiOutlineInstagram, AiOutlineCopyright } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiChevronDoubleUp } from 'react-icons/hi';

function Footer() {
    function onScrollToTopBtnTap() {
        window.scrollTo(0, 0)
    }

    return (
        <div id="footer" className="footer-wrapper">
            <div className="scroll_to_top_btn" onClick={onScrollToTopBtnTap}><HiChevronDoubleUp /></div>
            <p className="font-white font-16">Find me on the internet</p>
            <div className="footer-deco-line"></div>
            <div className="footer_links">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/friendcislol/">
                    <AiOutlineInstagram />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/francislow/">
                    <AiFillGithub />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/francis-low-bb1b4079/">
                    <FaLinkedinIn />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:francislow_6@hotmail.com">
                    <FiMail />
                </a>
            </div>

            <div className="copyright_wrapper">
                <AiOutlineCopyright />
                <p>{new Date().getFullYear() + ' Francis Low'}</p>
            </div>
        </div>
    )
}

export default Footer
