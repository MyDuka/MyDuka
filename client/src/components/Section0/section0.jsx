import React from 'react'
import './section0.css'

const Landing = () => {
    return (
        <div className="landing-container">
          <div className="lc-l-section">
            {/* content for left section */}
            <div className="landing">
                <div className="landing-content">
                    <label>Simple Inventory Management Software</label> 
                </div>
            </div>
            <button className='lp-btn'>
                <span></span>
                <span></span>
                <span></span>
                <span></span> Get Started a super merchant
            </button>
      
          </div>
          <div className="lc-r-section">
            {/* content for right section */}
            <div className="l-card">       
                <div className='l-p-card'>
                </div>
                 <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='about-img'/>

            </div>
            </div>
        </div>
      );
}

export default Landing