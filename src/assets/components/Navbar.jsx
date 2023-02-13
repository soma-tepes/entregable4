import React from 'react'
import './Styles/Navbar.css'
const Navbar = ({mostrarModal}) => {

  return (
    
   <nav className='navbar'>
    <h1 className='nav_title'>USERS</h1>
    <button className='nav_button' onClick={mostrarModal}><i className='bx bx-cross'></i>Create New User</button>
   </nav>
   
  )
}

export default Navbar