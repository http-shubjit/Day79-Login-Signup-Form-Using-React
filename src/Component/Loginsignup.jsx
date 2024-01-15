import React, { useState } from 'react'
import './Loginsignup.css'
import usericon from '../assets/person.png'
import emailicon from '../assets/email.png'
import passwordicon from '../assets/password.png'



const Loginsignup = () => {

const [action,setaction]=useState("Sign Up")


  return (
<div className="container">
  <div className="header">
    <div className="text">{action}</div>
    <div className="underline"></div>
  </div>
<div className="inputs">

  {action==="Login"?<div></div>:<div className="input">
    <img src={usericon}calt="" />
    <input type="text" name="" placeholder='Name..' required id="" />
  </div>}
  

  <div className="input">
    <img src={emailicon}  alt="" />
    <input type="email" name="" id=""  placeholder='Email..' required/>
  </div>

  <div className="input">
    <img src={passwordicon}  alt="" />
    <input type="password" name="" id="" placeholder='Password..' required />
  </div>

</div>

{action==="Sign Up"?<div></div>:<div className="forgetpassword">Lost Password? <span>Click Here</span>
</div>}


<div className="submitcontainer">
  <div className={action==='Login'?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign up</div>
  <div className={action==='Sign Up'?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>

</div>


</div>  )
}

export default Loginsignup