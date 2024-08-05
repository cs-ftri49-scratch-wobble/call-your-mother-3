// import {useState} from 'react'
import '../css/login.css';
import React from 'react';
//set value
//onChange
//const [email, setEmail] = useState('')
//function handleClick(){
//  setEmail()} 

// <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value) autofocus required />

function Login({loginOpen, setLoginOpen}) {


return (
    <div className={loginOpen ? `login` : `login invisible`}>
      <span className="close-button" onClick={() => setLoginOpen(false)}>&times;</span>
      <h2>Welcome</h2>
      {/* <h2>LOGO</h2> */}
      <div>
        
      </div>
      <input type="text" placeholder="Email" autoFocus required />
      <input type="text" placeholder="Password" required />
      <button className='btn-primary'>Login</button>

    </div>
  );
}

export default Login;
