import '../css/sunflower.css'

function Sunflower({friend, health}){
    return (
        <div className='frame'>
            <div className="pot-body">
                <span>{friend}</span>
                <span>{health}</span>
            </div>
            <div className="pot-lip"></div>
            <div className="sunflower-stem">
                <div className="stem-1"></div>
                <div className="stem-2"></div>
                <div className="left-leaf"></div>
                <div className="right-leaf"></div>
                <div className="stem-3"></div>
            </div>
            <div className="sunflower-outer">
                <div className="sunflower-inner">
                    <div className="sunflower-smile"></div>
                </div>
            </div>
        </div>
    )
}

export default Sunflower
