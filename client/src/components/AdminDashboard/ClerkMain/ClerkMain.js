import React from 'react'
import Sidebar from '../../AdminDashboard/Sidebar/Sidebar'
import ClerkDash from '../../AdminDashboard/ClerkDash/Clerkdash'
import './ClerkMain.css'

const ClerkMain = () => {
  return (
    <div className='ClerkApp'>
        <div className='ClerkGlass'>
            <Sidebar/>
            {/* <Clerkdash /> */}
            <ClerkDash />

        </div>
        
    </div>
  )
}

export default ClerkMain