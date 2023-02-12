import React from 'react'

const Navbar = ({mostrarModal}) => {

  return (
   <nav>
    <h1>Usuarios Crud</h1>
    <button onClick={mostrarModal}><i className='bx bx-cross'></i>Create new User</button>
   </nav>
  )
}

export default Navbar