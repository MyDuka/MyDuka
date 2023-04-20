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
            <button>
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
                 <img src="https://images.unsplash.com/photo-1648824572347-517357c9c44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGludmVudG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='about-img'/>

            </div>
            </div>
        </div>
      );
}

export default Landing