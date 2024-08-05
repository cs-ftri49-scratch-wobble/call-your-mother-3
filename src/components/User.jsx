import '../css/user.css';
// import Frame from './Frame';
import Outside from './Outside';
import { useEffect, useState } from 'react';
import Sunflower from './Sunflower';
import AddEvent from './AddEvent';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';

function User() {
const [addEventV, setAddEventV]= useState(false)
const [addFriendV, setAddFriendV]= useState(false)
const [editFriendV, setEditFriendV]= useState(false)
const [friendList, setFriendList] = useState([]);

const dummyData = [
  "kenny", "stephen", "joyce"
]

  URL = 'http://localhost:8080/kindred/all';
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFriendList(data)
      });
  }, []);

  // http://localhost:8080/kindred/all

  return (
    <div className="user">
      <AddEvent addEventV={addEventV} setAddEventV={setAddEventV}/>
      <AddFriend addFriendV = {addFriendV} setAddFriendV = {setAddFriendV} />
      <EditFriend editFriendV = {editFriendV} setEditFriendV = {setEditFriendV} />
      

      <div className="windowsill">
        <Outside />
        <div className="friend-list">
          {friendList.map((friend) => <Sunflower friend={friend.name} health="5" key={friend.id}/>)}
          {/* <Sunflower friend={friend} health={health}/>
          <Sunflower friend="alex" health={health}/>
          <Sunflower friend="erin" health={health}/> */}
        </div>
        <div className="friend-menu">
        <button className="btn-user" onClick={()=>setAddEventV(true)}>Add event</button>
        <button className="btn-user" onClick={()=>setAddFriendV(true)}>Add friend</button>
        <button className="btn-user" onClick={()=>setEditFriendV(true)}>Edit friends</button>
        </div>
      </div>
      {/* <Frame /> */}
    </div>
  );
}

export default User;
