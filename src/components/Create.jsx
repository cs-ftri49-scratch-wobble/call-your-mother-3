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
      //post request
      const data = {
        username,
        password
      }
        //check database for existing username
      //if matching data
         //console.log('invalid Create)
         //return 
       //Add user 
      
      setActiveUser(username)
      setCreateOpen(false);
      setUsername('');
      setPassword('');
    
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
   