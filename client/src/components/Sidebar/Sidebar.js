import React, {useState} from 'react'
import {UilSignOutAlt} from '@iconscout/react-unicons';
import { SidebarData } from '../Data/Data';
import './Sidebar.css'


const Sidebar = () => {

  // making only one item active in the sidebar
  const [selected, setSelected] = useState(0)

  return (
    <div className='Clerk'>
        <div className='Clerk-glass'>
        <div className='Sidebar'>
      {/* Logo */}
      <div>
        <label>MyDuka</label>
      </div>
      {/* Menu */}
      <div className='menu'>
        {SidebarData.map((item, index)=>{
          return(
            <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
              <item.icon className="icon"/>
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}
        
        <div className='menuItem'>
          <UilSignOutAlt className="signout" />

        </div>
  


      </div>
             
    </div>

    </div>
      
    </div>
   
  
  )
}

export default Sidebar