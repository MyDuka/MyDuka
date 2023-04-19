
 

import React from "react";
import './Landingpage.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import {AiOutlineLogin} from "react-icons/ai"
import { Link } from "react-router-dom";


function Landingpage(){
    return(
        <>


        <button id="auth_logo" >
        <Link to="/auth"><AiOutlineLogin/></Link>
        </button>

        <div className="container">
            <h1 contenteditable id="hone">Task Cargo</h1>
            <p id="para">Easy And Effective Way to Organize Your Everyday Tasks</p>
            <p id="para">Login or Sign Up and get started <Link to="/auth" id="login_arrow"><HiOutlineArrowNarrowRight/></Link></p>
        </div>

        
        </>
    )
}

export default Landingpage;