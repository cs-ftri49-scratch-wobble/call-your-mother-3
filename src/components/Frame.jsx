import '../css/frame.css'
import pyramids from '../assets/travel-pyramid-boy.jpg'

function Frame(){
    return (
        <div className="picture-frame">
        <div className="frame-body">
          <div className="frame-inner">
            <img className="placeholder" src={pyramids} alt='friends' />
          </div>
        </div>
      </div>
    )
}

export default Frame
