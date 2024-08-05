import { useState } from 'react';
import '../css/main.css'
import Footer from './Footer';
import Hero from './Hero';
import Login from './Login';
import Nav from './Nav';
import User from './User';
import Create from './Create';


function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)
  const [activeUser, setActiveUser] = useState('');
  
  return (
    <div className="app">
      <Login loginOpen = {loginOpen} setLoginOpen = {setLoginOpen} setActiveUser={setActiveUser}/>
      <Create createOpen = {createOpen} setCreateOpen = {setCreateOpen} setActiveUser={setActiveUser}/>   
      <Nav />
      <Hero loginOpen = {loginOpen} setLoginOpen = {setLoginOpen} createOpen = {createOpen} setCreateOpen = {setCreateOpen}/>
      <User />
      <Footer />
     
    </div>
  );
}

export default App;
