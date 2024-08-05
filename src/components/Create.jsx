import '../css/create.css';
import React from 'react';

function Create({createOpen, setCreateOpen}) {


    return (
        <div className={createOpen ? "create" : "create invisible"}>
          <span className="close-button" onClick={() => setCreateOpen(false)}>&times;</span>
          <h2>Welcome</h2>
          {/* <h2>LOGO</h2> */}
          <div>
            
          </div>
          <input type="text" placeholder="Email" autoFocus required />
          <input type="text" placeholder="Password" required />
          <button className='btn-secondary'>Create account</button>
    
        </div>
      );
    }
    
    export default Create;
   