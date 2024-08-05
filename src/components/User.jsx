import '../css/user.css';
import Frame from './Frame';
import Outside from './Outside';
import { useEffect, useState } from 'react';
import Sunflower from './Sunflower';
import AddEvent from './AddEvent';

function User() {
const [addEventV, setAddEventV]= useState(false)

  URL = 'http://localhost:8080/';
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

const friend = "David";
const health = 5;

  return (
    <div className="user">
      <AddEvent addEventV={addEventV} setAddEventV={setAddEventV}/>
      <div className="windowsill">
        <Outside />
        <div className="friend-list">
          <Sunflower friend={friend} health={health}/>
          <Sunflower friend="alex" health={health}/>
          <Sunflower friend="erin" health={health}/>
        </div>
        <div className="friend-menu">
          <button className="btn-user">Edit friends</button>
          <button className="btn-user" onClick={()=>setAddEventV(true)}>Add event</button>
        </div>
      </div>
      <Frame />
    </div>
  );
}

export default User;
