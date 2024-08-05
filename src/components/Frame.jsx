import '../css/frame.css'
import cliffs from '../assets/cliffs.jpg'

function Frame(){
    return (
        <div className="picture-frame">
        <div className="frame-body">
          <div className="frame-inner">
            <img className="placeholder" src={cliffs} alt='friends' />
          </div>
        </div>
      </div>
    )
}

export default Frame
