import React from 'react'

function Header() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',backgroundColor:'white'}}>
      <div style={{display:'flex'}}>
        <img src='https://plus.unsplash.com/premium_photo-1769789149680-b2b54e49859d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{width:'25px',height:'25px',marginRight:'5px'}}/>
        <div>Health Care App</div> </div>

      <div style={{display:'flex',gap:'20px'}}>
       <a href="/home">Home</a>
        <a href="/analysis">Analysis</a>
        <a href="/createPost">CreatePost</a>
        <a href="/replayPost">ReplayPost</a>
        <a href="/resource">Resource</a>
        
      </div>
      
    </div>

  )
}

export default Header