import React from 'react'

const UserCard = ({user,deleteUser,setUpdate,mostrarModal}) => {

const edit =()=>{
  setUpdate(user)
  mostrarModal()
}

  return (
    <article >
    <h3>{user.first_name} {user.last_name}</h3>
    <hr />
    <ul>
      <li><span>email</span>{user.email}</li>
      <li><span>birthday</span><i className='bx bx-gift'></i>{user.birthday}</li>
    </ul>
    <hr />
    <footer>
      <button onClick={()=>deleteUser(user.id)}><i className="bx bx-trash"></i></button>
      <button><i onClick={edit} className="bx bx-pencil"></i></button>
    </footer>
  </article>
  )
}

export default UserCard