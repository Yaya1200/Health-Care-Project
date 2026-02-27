import React from "react";
import './account.css'
function Account(){
    return(
      <div className="account-page">
        <p className="account-title">Account Setting</p>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="write username here" />
        <br />  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="write email here" />
        <br /> 
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="password" />
        <br /> 
        <button type="submit">Create Account</button>
        
      </div>
    )

}
export default Account;