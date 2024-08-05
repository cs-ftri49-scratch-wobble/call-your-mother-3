import { useState } from 'react';
import '../css/userCards.css';

function AddEvent({ addEventV, setAddEventV, friendList }) {
  const [friend, setFriend] = useState();
  const [date, setDate] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    if (friend && date) {

      //make post request
    fetch(`http://localhost:8080/kindred/${friend}/addDate`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ date }),
    })
    handleClose();   
  }
  }
  function handleClose() {
    document.getElementById('add-event-form').reset();
    setAddEventV(false);
    setDate();
    setFriend();
  }

  return (
    <div className={addEventV ? 'card' : 'card invisible'}>
      <span className="close-button" onClick={() => handleClose()}>
        &times;
      </span>
      <h2>Add Event</h2>
      {/* <h2>LOGO</h2> */}
      <div></div>
      <form id="add-event-form">
        <select name="friend" onChange={(e) => setFriend(e.target.value)}>
          <option value="invalid">choose</option>
          {friendList.map(friend => <option value={friend.name} key={friend.name}>{friend.name}</option>)}
        </select>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          placeholder="date"
        />
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

export default AddEvent;
