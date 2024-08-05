import '../css/nav.css'
import logo from '../assets/red-panda-left.png'

function Nav(){
    return (
        <div className="nav">
            <h2>Call Your Mother</h2>
            <img className="nav-logo" src = {logo} alt = 'red panda logo'/>
        </div>
    )
}

export default Nav
