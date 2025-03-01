import React, { useState } from 'react'
import "./Login.css"
import Product from './Product'
import axios from 'axios'

const Login = () => {
  const [isError, setisError] = useState(false)
  var userData=[{userName:"Vignesh",passCode:123},{userName:"Yuva raja",passCode:1234},{userName:"Dheena",passCode:12345}];
  const signup=()=>{
    var Name=document.getElementById("namebox").value;
    var Password=document.getElementById("passbox").value;
    const activeUser=userData.filter((value)=>Name==value.userName);

    if(activeUser.length>0){
      if(activeUser[0].passCode == Password){
        localStorage.setItem("userName",activeUser[0].userName);
        window.location.replace('/product')
      }
    }
    else{
      document.getElementById("namebox").style.borderColor="#f7e8e363";
      document.getElementById("passbox").style.borderColor='#f7e8e363'
      setisError(true)
      
    }
  }
  return (
    <div className="container">
       <div className="form">
        <h1 className="title">Login</h1>
        <input type="text" placeholder='Username' id="namebox" autoComplete='off'></input>
        {isError&& <p className='wrong'>Invalid username & password</p>}
        <input type="password" placeholder='Password' id="passbox"></input>
        <div class="row">
          <div className="check">
            <input type="checkbox" id="check"/>
            <label for="check">Remember me</label>
          </div>
          <a href='amazon.com'>Forget password?</a>
        </div>
        <button className='btn' onClick={signup}>Login</button>
        <h3 className='bold'>Don't have account? <span>Register</span></h3>
       
       </div>
    </div>
  )
}

export default Login