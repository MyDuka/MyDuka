import React from 'react'
import './ClerkDash.css'
import Cards from '../Cards/cards'
import Table from '../Table/Table'


const Clerkdash = () => {
  return (
    <div className='ClerkDash'>
      <label className='cd-label'>Clerk Dashboard</label>
      <Cards />
      <Table />
    </div>
  )
}

export default Clerkdash