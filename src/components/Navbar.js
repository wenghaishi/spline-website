import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <div className='button-container'>        
            <button className='button'>About</button>
            <button className='button'>About</button>
        </div>
        <h1 className='about' >Hi I am Sam, a frontend developer based in Singapore</h1>
    </div>
  )
}

export default Navbar