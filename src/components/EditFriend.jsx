import { useState } from 'react';
import '../css/userCards.css';

function EditFriend({ editFriendV, setEditFriendV }) {
  const [friend, setFriend] = useState();

  function deleteFriend(e) {
    e.preventDefault();
    if (friend) {
    //   console.log('success');
      //make post request
      document.getElementById('delete-friend-form').reset();
      setEditFriendV(false);
      setFriend();
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
          <option value="david">david</option>
          <option value="alex">alex</option>
          <option value="erin">erin</option>
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
