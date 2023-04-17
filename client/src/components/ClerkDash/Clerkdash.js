import React from 'react'
import './ClerkDash.css'
import Cards from '../Cards/cards'



const Clerkdash = () => {
  return (
    <div className='ClerkDash'>
      <label className='cd-label'>Clerk Dashboard</label>
      <Cards />
    </div>
  )
}

export default Clerkdash