import React from "react";
import { useState } from "react";
import './account.css'
import axios from "axios";
function Account(){
    const[login,setLogin]=useState(true);
    const[signupData, setSignupData]=useState({username:'',email:'',password:''});
    const[loginData, setLoginData]=useState({username:'',email:'',password:''}); 
    function handleSignupChange(e){
        setSignupData({...signupData,[e.target.name]:e.target.value})
    }   
    function handleLoginChange(e){
         setLoginData({...loginData,[e.target.name]:e.target.value})
      }
    async function handleSaveLogin(){
      try{await axios.post('http://localhost:5000/login',loginData)
      setSignupData({username:'',email:'',password:''});
      setLoginData({username:'',email:'',password:''});
      alert('Login successful! Welcome back.');
      }
      catch(error){
        console.log(error)
      }
      
    }
    async function handleSaveSignup(){
      try{
        await axios.post('http://localhost:5000/signup',signupData)
      setLoginData({username:'',email:'',password:''});
      setSignupData({username:'',email:'',password:''});
      setLogin(true);
      alert('Account created successfully! Please login to continue.');
      }
      catch(error){
        console.log(error)
      }
    }
    
        return(
      login ? <div className="account-page">
        <p className="account-title">Login Page</p>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="write username here" value={loginData.username} onChange={handleLoginChange} />
        <br />  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="write email here" value={loginData.email} onChange={handleLoginChange} />
        <br /> 
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="password" value={loginData.password} onChange={handleLoginChange} />
        <br /> 
        <button type="submit" onClick={handleSaveLogin}>login</button>
        <p>Don't have an account? <span onClick={()=>setLogin(false)}>Sign up</span></p>
      </div> :
        
        <div className="account-page">
        <p className="account-title">Sign up</p>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="write username here" value={signupData.username} onChange={handleSignupChange}/>
        <br />  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="write email here" value={signupData.email} onChange={handleSignupChange} />
        <br /> 
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="password" value={signupData.password} onChange={handleSignupChange} />
        <br /> 
        <button type="submit" onClick={handleSaveSignup}>Sign up</button>
        
      </div>
    )

}
export default Account;