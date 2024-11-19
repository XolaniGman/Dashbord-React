import React from "react";
import '../style/content.css';
import BiNotify from '../react-icon/bi/icon4.webp';
import BiSearch from '../react-icon/bi/icon1.png';

const ContentHeader = () => {
    return (
        <div className="content--header">
            <h1 className="header--title"> Dashboard</h1>
            <div className="header--activity">
                <div className="Search-box">
                    <input type="text" placeholder="Seach anything here"/>
                    <img src={BiSearch} className="icon"></img>
                </div>
                <div className="Notify">
                <img src={BiNotify} className="icon"></img>
                </div>
            </div>
            
        </div>
    );
}
   
export default ContentHeader;