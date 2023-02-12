import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

import UsersList from './assets/components/UsersList'
import Navbar from './assets/components/Navbar'
import ModalForm from './assets/components/ModalForm'


const URL = "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState([])
  const [modal, setIsShoeModal] = useState(false)
  const [update, setUpdate] = useState()


  
  const mostrarModal =()=>{
    setIsShoeModal((modal)=>!modal)
  }
  
  const getAllUser =()=>{
    axios.get(`${URL}users/`)
      .then((res)=>setUsers(res.data))
      .catch((err)=>console.log(err))
  }
    

  const createUser=(data)=>{
      axios.post(`${URL}users/`, data)
      .then(() => {
        getAllUser()
        mostrarModal()
      })
      .catch((err) => console.log(err));
  }

 const updateUserAxios=(data,id)=>{
   axios.patch(`${URL}users/${id}/`, data)
   .then(()=>{
    getAllUser()
    mostrarModal()
  })
   .catch(()=>console.log(err))
 }


const deleteUser = (id)=>{

 axios.delete(`${URL}users/${id}/`)
 .then(()=>getAllUser())
 .catch((res)=>console.log(res))

}

  useEffect(()=>{
    getAllUser()

  },[])

  return (
    <div className="App">
     hello 
     <Navbar  mostrarModal={mostrarModal}/>
     <ModalForm modal={modal} mostrarModal={mostrarModal}
     createUser={createUser} update={update} updateUserAxios={updateUserAxios}
     setUpdate={setUpdate}
     />
     <UsersList users={users} deleteUser={deleteUser}
     setUpdate={setUpdate} mostrarModal={mostrarModal}
     />

    </div>
  )
}

export default App
