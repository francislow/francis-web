import React from 'react'
import './collab.css'
import { AiOutlineUser } from 'react-icons/ai';

function Collab() {
    return (
        <div className="collab-wrapper">
            <div class="text_wrapper">
                <div class="collab_icon"><AiOutlineUser /></div>
                <p>Thinking of collaborating with me?</p>
            </div>
            <a href="mailto:francislow_6@hotmail.com">
                Get in touch
            </a>
        </div>
    )
}

export default Collab
