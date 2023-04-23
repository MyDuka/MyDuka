import React from 'react'
import Button from './sections/button'
import './navbar.css'

function Navbar(){
    return(
        <nav>
            <div>
                <h1 id="logo">MyDuka</h1>
            </div>
            <Button />
        </nav>
    )
}

export default Navbar