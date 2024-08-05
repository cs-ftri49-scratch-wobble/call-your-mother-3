// import {useState} from 'react'
import '../css/login.css';
import React, { useState } from 'react';
//set value
//onChange
//const [email, setEmail] = useState('')
//function handleClick(){
//  setEmail()}

// <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value) autofocus required />

function Login({ loginOpen, setLoginOpen, setActiveUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleClose() {
    setLoginOpen(false);
    setUsername('');
    setPassword('');
  }

  function handleLogin() {
    if (!username || !password) {
      console.log('invalid login');
      return;
    }
    //post request
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (!data) {
          console.log("invalid login")
          setActiveUser('')
          return;
        }

        setActiveUser(username);
        setLoginOpen(false);
        setUsername('');
        setPassword('');

        console.log('Login worked', data);
      });

  }

  return (
    <div className={loginOpen ? `login` : `login invisible`}>
      <span className="close-button" onClick={() => handleClose()}>
        &times;
      </span>
      <h2>Welcome</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        autoFocus
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <button className="btn-primary" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
}

export default Login;
