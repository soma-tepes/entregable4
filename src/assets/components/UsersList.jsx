import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users,deleteUser,setUpdate,mostrarModal}) => {
  return (
    <section>
     {
      users.map(user=> <UserCard key={user.id} user={user} 
        setUpdate={setUpdate} mostrarModal={mostrarModal}
        deleteUser={deleteUser}/>
      )
     }
     </section>
  )
}

export default UsersList