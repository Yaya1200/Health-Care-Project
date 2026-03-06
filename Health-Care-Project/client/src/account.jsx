import React from "react";
import { useState } from "react";
import './account.css'
function Account(){
    const[login,setLogin]=useState(true);
    const[saveSignup,setSaveSignup]=useState(false);
    const[saveLogin, setSaveLogin]=useState(false);
    const[signupData, setSignupData]=useState({username:'',email:'',password:''});
    const[loginData, setLoginData]=useState({username:'',email:'',password:''});   
        return(
      login ? <div className="account-page">
        <p className="account-title">Login Page</p>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="write username here" />
        <br />  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="write email here" />
        <br /> 
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="password" />
        <br /> 
        <button type="submit">login</button>
        <p>Don't have an account? <span onClick={()=>setLogin(false)}>Sign up</span></p>
      </div> :
        
        <div className="account-page">
        <p className="account-title">Sign up</p>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="write username here" />
        <br />  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="write email here" />
        <br /> 
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="password" />
        <br /> 
        <button type="submit">Sign up</button>
        
      </div>
    )

}
export default Account;