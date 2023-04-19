import React from "react";
import './Landingpage.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsClockHistory } from "react-icons/bs";
import {AiOutlineFolderOpen, AiOutlinePieChart} from "react-icons/ai";
import { TbChartInfographic } from "react-icons/tb";
import { Link } from "react-router-dom";


function Landingpage(){
    return(
        <>
        <div className="container">
            <div className="row">
                <h1 contenteditable id="hone">MyDuka</h1>
                {/* <p id="para">Easy And Effective Way to Organize Stores Inventory</p> */}
            </div>
        </div>

        <div className="container">
            
            <div className="row">
                <div className="col">
                    <h2 id="para"> Simple Inventory Management System</h2>
                    <br/>
                    <p id="para">Get started as a merchnt <Link to="/merchant/signup" id="login_arrow"><HiOutlineArrowNarrowRight/></Link></p>
                </div>
                <div className="col">
                    <img src="https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="img-thumbnail" alt="Welcome"/>
                </div>
            </div>
            <div className="row">
                <h2>Why MyDuka</h2>
                <div className="col">


                <div className="card cadi" >
                    <img src="https://images.pexels.com/photos/210705/pexels-photo-210705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="fast"/>
                    <div className="card-body">
                        <h3 className="card-text"> Save Money</h3>
                    </div>
                </div>
                
                </div>
                <div className="col">


                <div className="card cadi" >
                    <img src="https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="time"/>
                    <div className="card-body">
                        <h3 className="card-text"> Save Time </h3>
                    </div>
                </div>
               
                </div>
                <div className="col">

                <div className="card cadi">
                    <img src="https://images.pexels.com/photos/3790224/pexels-photo-3790224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Rest"/>
                    <div className="card-body">
                        <h3 className="card-text">Rest Easy </h3>
                    </div>
                </div>
                
                </div>
            </div>


            <div className="row">
                 <div className="col">
                 <img src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="img-thumbnail" alt="Welcome"/>
                
                </div>
                <div className="col">
                    <ul id="lista">
                        <li><span><BsClockHistory/></span> <span>Get real time reporting insights.</span></li>
                        <li><span><AiOutlineFolderOpen/></span> <span>Get in-depth data on products and stock history.</span> </li>
                        <li> <span><TbChartInfographic/> </span> <span> Detailed product analysis over time.</span></li>
                        <li> <span> <AiOutlinePieChart/></span> <span> Proper data visualization and presentation.</span> </li>
                    </ul>
                </div>
            </div>


        </div>



        
        </>
    )
}

export default Landingpage;