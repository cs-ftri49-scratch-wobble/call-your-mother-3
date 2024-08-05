import { useState } from 'react';
import '../css/userCards.css';

function EditFriend({ editFriendV, setEditFriendV, friendList }) {
  const [friend, setFriend] = useState();

  function deleteFriend(e) {
    e.preventDefault();
    if (friend) {
      const newUrl = `http://localhost:8080/kindred/${friend}`
      fetch(newUrl, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify({ name: friend }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log('Bad network response');
          }
        })
        .then(data => {
          console.log('Friend deleted:', data);
          handleClose();
        })
    }
  }
  function handleClose() {
    document.getElementById('delete-friend-form').reset();
    setEditFriendV(false);
    setFriend();
  }

  return (
    <div className={editFriendV ? 'card' : 'card invisible'}>
      <span className="close-button" onClick={() => handleClose()}>
        &times;
      </span>
      <h2>Remove Friend</h2>
      {/* <h2>LOGO</h2> */}
      <div></div>
      <form id='delete-friend-form'>
        <select name="friend" onChange={(e) => setFriend(e.target.value)}>
        <option value="invalid">choose</option>
          {friendList.map(friend => <option value={friend.name} key={friend.name}>{friend.name}</option>)}
        </select>
        <button
          onClick={(e) => {
            deleteFriend(e);
          }}
          className="btn-primary"
        >
          Remove
        </button>
      </form>
    </div>
  );
}

export default EditFriend;
