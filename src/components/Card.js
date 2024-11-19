import React from "react";
import Biwep from '../react-icon/bi/Biwep.png';
import BiApp from '../react-icon/bi/BiApp.webp';
import BiUi from '../react-icon/bi/BiUI.png';

const course = [
    {
        title: 'Web Development',
        duration: '2 hours',
        icon:<img src={Biwep} className="icon"></img>
        
    },
    {
        title: 'App Development',
        duration: '2 hours',
        icon:<img src={BiApp} className="icon"></img>
        
    },
    {
        title: 'UX developmnt',
        duration: '2 hours',
        icon:<img src={BiUi} className="icon"></img>
        
    },
 
]

const Card = () => {
    return (
        <div className="card--container">
            {
                course.map((item) => (
                    <div className="card">
                        <div className="card--cover">{item.icon}</div>
                        <div className="Card--title">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default Card;