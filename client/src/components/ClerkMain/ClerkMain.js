import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Clerkdash from '../ClerkDash/Clerkdash'
import './ClerkMain.css'

const ClerkMain = () => {
  return (
    <div className='ClerkApp'>
        <div className='ClerkGlass'>
            <Sidebar/>
            <Clerkdash />

        </div>
        
    </div>
  )
}

export default ClerkMain