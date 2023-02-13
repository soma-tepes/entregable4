import React from 'react'
import "./Styles/UseCard.css"

const UserCard = ({user,deleteUser,setUpdate,mostrarModal}) => {

const edit =()=>{
  setUpdate(user)
  mostrarModal()
}

  return (
    <div className='User_list_principal'>
    
    <article className='card_dad' >
    <div className='flexa'>
    <h3 className='card_title'>{user.first_name} {user.last_name}</h3>
    <hr/>
    </div>
    <div className='flexb'>
    <ul className='card_ul'>
      <li><span>Email:</span>{user.email}</li>
      <li><span>Birthday</span><i className='bx bx-gift'></i>{user.birthday}</li>
    </ul>
    <hr />
    </div>
    <div className='flexi'>
      <div className='flexii'>
   
      <button  onClick={()=>deleteUser(user.id)} className='card_button_delete'><i className="bx bx-trash bdelete"></i></button>
      <button className='card_button_edit'><i onClick={edit} className="bx bx-pencil pedit"></i></button>
 
    </div>
    </div>
  </article>
  </div>
  
  )
}

export default UserCard