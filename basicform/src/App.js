import React,{useState} from 'react';


const App = () => {
const [values,setValues] =useState({
  firstName:'',
  secondName:'',
  email:''
});

const [submit,setsubmit]=useState(false);

const handleSubmit =(event)=> {
  event.preventDefault()
  if(values.firstName && values.secondName && values.email){ setValid(true)}
  setsubmit(true)
}

const [valid ,setValid] =useState(false);

const handlefirstNameInput =(event)=> {
  setValues({...values,firstName:event.target.value})
}

const handlesecondNameInput =(event)=> {
  setValues({...values,secondName:event.target.value})
}

const handleemailInput =(event)=> {
  setValues({...values,email:event.target.value})
}
  return (
     <div className='form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
    {submit && valid ? <div className='success-message'>Succes!!</div>:null }  
        <input className='form-field' id='first-name' type='text' placeholder='firstName' 
        value={values.firstName} name='firstName'
          onChange={handlefirstNameInput}
        />
      {submit  && !values.firstName?<span>please enter the firstname</span>:null }  


        <input className='form-field' id='second-name' type='text' placeholder='secondName' value={values.secondName} onChange={handlesecondNameInput} name='secondName'/>
       {submit && !values.secondName?  <span>Please enter  the secondname</span>:null}

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email" onChange={handleemailInput}
          value={values.email} 
        />
    {submit && !values.email ?  <span>Please enter the email</span>:null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
     </div>
  )
}

export default App