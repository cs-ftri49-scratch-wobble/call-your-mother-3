import '../css/hero.css'
import flowers from '../assets/wc-flowers-2.png'


function Hero({loginOpen, setLoginOpen, createOpen, setCreateOpen}){
    return (
        <div className="hero">
                <img className="hero-flowers" src={flowers} alt='red-flowers'/>
            <div className="taglines">
                <h1>Be the</h1>
                <h1 id="daughter">daughter</h1>
                <h1 id="boss">boss</h1>
                <h1 id="partner">partner</h1>
                <h1 id="friend">friend</h1>
                <h1>you want to be.</h1>
            </div>
            <div className="hero-buttons">
                <button className="btn-primary" onClick={() => {setLoginOpen(true)}}>Login</button>
                <button className="btn-secondary" onClick={() => {setCreateOpen(true)}}>Create account</button>
            </div>
        </div>
    )
}

export default Hero
