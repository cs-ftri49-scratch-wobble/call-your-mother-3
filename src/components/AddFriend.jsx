import { useState } from 'react';
import '../css/userCards.css';

function AddFriend({ addFriendV, setAddFriendV }) {
  const [friend, setFriend] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (friend) {
      console.log('success');
      //make post request
      document.getElementById('add-friend-form').reset();
      setAddFriendV(false);
      setFriend();
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
