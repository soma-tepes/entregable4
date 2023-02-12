import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import './Styles/ModalForm.css'


const ModalForm = ({modal,mostrarModal,createUser,update,updateUserAxios,setUpdate}) => {
  const defaultValues ={
  
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    birthday:"",
    
    
    }

const{register,handleSubmit, reset}= useForm()

const submit =(data)=>{
  if(update)
  {updateUserAxios(data,update.id)}
  else
   {createUser(data)}
    reset(defaultValues)
}

const botonclose=()=>{
  mostrarModal()
  reset(defaultValues)
  setUpdate()

}
useEffect(()=>{
  if(update){
    reset(update)
  }

},[update])

  return (

    <section className={`modal_Form ${modal? "activeForm":""}`}>
      <form onSubmit={handleSubmit(submit)} className="modalForm_form">
        <h3 className="modal_title">{update?"Edit user":"New User"}</h3>
        <i onClick={botonclose} className='modal_formx bx bx-x'></i>
        <div className="modal_div">
       
          <label  className="modal_form_label" htmlFor="">Name</label>
          <input className="form_input" type="text"  {...register("first_name")}/>
        </div>
        <div className="modal_div" >
          <label className="modal_form_label"  htmlFor="">Last Name</label>
          <input className="form_input" type="text" {...register("last_name")} />
        </div>
        <div className="modal_div">
          <label className="modal_form_label" htmlFor="">email</label>
          <input className="form_input" type="email"  {...register("email")}/>
        </div>
        <div className="modal_div">
          <label className="modal_form_label" htmlFor="">password</label>
          <input className="form_input" type="password" {...register("password")} />
        </div>
        <div className="modal_div">
          <label className="modal_form_label" htmlFor="">datetime</label>
          <input className="form_input" type="date" {...register("birthday")} />
        </div>
       <button type="submit" className="modal_button">{update?"Save Changes":"Add new User"}</button>
      </form>
    </section>
  );
};

export default ModalForm;
