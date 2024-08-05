import { useState } from 'react';
import '../css/userCards.css';

function AddFriend({ addFriendV, setAddFriendV }) {
  const [friend, setFriend] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (friend) {
      fetch('http://localhost:8080/kindred/create', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name: friend }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log('Bad network response');
          }
        })
        .then(data => {
          console.log('Friend added:', data);
          handleClose();
        })

    }
  }
  function handleClose() {
    document.getElementById('add-friend-form').reset();
    setAddFriendV(false);
    setFriend();
  }
  
  return (
    <div className={addFriendV ? 'card' : 'card invisible'}>
      <span className="close-button" onClick={() => handleClose()}>
        &times;
      </span>
      <h2>New Friend</h2>
      {/* <h2>LOGO</h2> */}
      <div></div>
      <form id="add-friend-form">
        <input type="text" value={friend} placeholder="new friend" onChange={(e) => {setFriend(e.target.value)}} />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddFriend;
