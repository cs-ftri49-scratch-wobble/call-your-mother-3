import '../css/nav.css'
import logo from '../assets/red-panda-left.png'
import logout from '../assets/logout.png'

function Nav({activeUser, setActiveUser}){
    return (
        <div className="nav">
            <div className="nav-left">
                <img className="nav-logo" src={logo} alt="red panda logo" />
                <h2>Call Your Mother</h2>
            </div>
            <div className="nav-left">
                <h2>{activeUser}</h2>
                <img className="nav-logo" src={logout} alt='logout button' onClick={() => setActiveUser('')}/>
            </div>
        </div>
    )
}

export default Nav
// roger that
//cool. Now we just need the h2 for the username directly left of the logout icon
//It can be static for right now. Then we'll set it to be the activeUser

//Then we'll add an onClick to the logout icon that will setActiveUser('').
//it needs to be a callback function
// () => setActiveUser('');
// username should be {activeuser}

//log in with 'DK' and 'password' to test if it all works. Then test the log out button. It should direct you back to the landing page