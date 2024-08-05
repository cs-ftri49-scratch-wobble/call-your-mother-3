import '../css/create.css';
import React, { useState } from 'react';

function Create({createOpen, setCreateOpen, setActiveUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleClose() {
    setCreateOpen(false);
    setUsername('');
    setPassword('');
  }

  function handleCreate() {
    if (!username || !password) {
      //add notification to user
      console.log('invalid Create')
      return;
    }
    
    fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          console.log('Account created', data);
          handleClose();
        } else {
          console.log(data.message);
        }
      })
      .catch(err => {
        console.log('Error during signup:', err);
      })
          
  }

    return (
        <div className={createOpen ? "create" : "create invisible"}>
          <span className="close-button" onClick={() => handleClose()}>&times;</span>
          <h2>Welcome</h2>
          {/* <h2>LOGO</h2> */}
          <div>
            
          </div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}} autoFocus required />
          <input type="text" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} required />
          <button className='btn-secondary' onClick={() => {handleCreate()}} >Create account</button>
    
        </div>
      );
    }
    
    export default Create;
   