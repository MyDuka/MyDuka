import React from 'react'
import './section2.css'
import HistoryIcon from '@mui/icons-material/History';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import InsightsIcon from '@mui/icons-material/Insights';


const About2 = () => {
    return (
      <div>
        <h1 className='ab2-title'>Inventory Made Easy</h1>
        <div className="about2-container">
          <div className="ab-l-section">
            {/* content for left section */}
            <div className="a2-card">       
                <div className='a2-p-card'>
                </div>
                 <img src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=600" className='about2-img'/>

            </div>

          </div>
          <div className="ab-r-section">
            {/* content for right section */}
              <div className='a-content'>
                <item>
                  <HistoryIcon className="lp-icon"/>
                  <p>
                  Get real-time reporting insights.
                  </p>
                </item>

                <item>
                    <DataUsageIcon className="lp-icon"/>
                    <p>
                      Get in-depth data on items, folders, and, user histories.
                    </p>
                </item>
                
                <item>
                    <SystemUpdateAltIcon className="lp-icon"/>
                    <p>
                      Easily export custom PDF or CSV reports.
                    </p>
                </item>

                <item>
                    <p>
                    <InsightsIcon className="lp-icon"/>
                    Perfect for audits, budgeting, and forecasting.
                    </p>

                </item>
                
                
              </div>
            
          </div>
        </div>

      </div>
        
      );
}

export default About2