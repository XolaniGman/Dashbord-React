import React from "react";
import Bilogo from '../react-icon/bi/Bihome.png';
import BiHome from '../react-icon/bi/cloud-fog-icon.webp';
import BiTask from '../react-icon/bi/icon1.png';
import BiReport from '../react-icon/bi/icon1a.webp';
import BiState from '../react-icon/bi/icon12.png.webp';
import BiMassage from '../react-icon/bi/icon33.webp';

import '../style/Slider.css'; 
const Slidebar = () => {
    return (
     <div className="menu">
        <div className="logo">
        <img src={Bilogo} className="icon"></img>
            <h2>EduFlex</h2>
        </div>

        <div className="Menu--list">
            <a href="#" className="item">
              <img src={BiHome} className="icon"></img>
                  Dashboard
            </a>
            <a href="#" className="item">
            <img src={BiTask} className="icon"></img>
                  Task 
            </a>
            <a href="#" className="item">
            <img src={BiReport} className="icon"></img>
                  Report
            </a>
            <a href="#" className="item">
            <img src={BiState} className="icon"></img>
                  State
            </a>
            <a href="#" className="item">
            <img src={BiMassage} className="icon"></img>
                  Massage
            </a>
          

        </div>
        
  
    </div>
    );
}


export default Slidebar;