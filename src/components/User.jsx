import '../css/user.css';
import flowers from '../assets/wc-flowers-2.png';
import Frame from './Frame';
import Outside from './Outside';
import { useEffect } from 'react';

function User() {
  URL = "http://localhost:8080/"
useEffect(() => {
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}, [])

  return (
    <div className="hero">
      <img className="hero-flowers" src={flowers} alt="red-flowers" />
      <Outside />
      <Frame />
    </div>
  );
}

export default User;
