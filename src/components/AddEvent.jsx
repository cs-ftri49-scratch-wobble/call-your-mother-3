import { useState } from 'react';
import '../css/card.css';

function AddEvent({ addEventV, setAddEventV }) {
  const [friend, setFriend] = useState();
  const [date, setDate] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    if (friend && date) {
      console.log('success');
      //make post request

      document.getElementById('add-event-form').reset();
      setAddEventV(false);
      setDate();
      setFriend();
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
          <option value="david">david</option>
          <option value="alex">alex</option>
          <option value="erin">erin</option>
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
