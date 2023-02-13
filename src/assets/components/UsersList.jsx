import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users,deleteUser,setUpdate,mostrarModal}) => {
  return (
  <div className='User'>
    <section className='User_list'>
     {
      users.map(user=> <UserCard key={user.id} user={user} 
        setUpdate={setUpdate} mostrarModal={mostrarModal}
        deleteUser={deleteUser}/>
      )
     }
     </section>
     </div>
  )
}

export default UsersList