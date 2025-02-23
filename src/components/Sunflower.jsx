import '../css/sunflower.css'
import {useEffect, useState} from 'react';

function Sunflower({friend, today}){
    const [daysPassed, setDaysPassed] = useState('NA');
useEffect(() => {
    let lastDate= new Date(friend.date);
    const diff_in_time = lastDate.getTime() - today.getTime();

    setDaysPassed( Math.abs(Math.round(diff_in_time / (1000 * 3600 * 24)))-1);
}, [friend, today])  
let styles = {}
if (daysPassed <= 10)
    styles = {
        color: "rgb(120, 242, 120)"
    }
 if (daysPassed > 10)
    styles = {
        color: "#ffde59"
    }   
if (daysPassed > 20)
styles = {
    color: "#bd1b2e"
}




    return (
        <div className='frame'>
            <div className="pot-body">
                <span>{friend.name}</span>
                <span style={styles}>{daysPassed}</span>
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
