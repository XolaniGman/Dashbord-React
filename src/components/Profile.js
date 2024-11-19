import React from "react";
import Image1 from '../react-icon/bi/a1.png';
import ProfileHeader from "./ProfileHeader";
import '../style/Profile.css'; 

const course = [
    {
        title:'English',
        duration: '2 hours',
        icon:<img src={Image1} className="icon"/>,
    },
    {
        title:'English',
        duration: '2 hours',
        icon:<img src={Image1} className="icon"/>,
    },
    {
        title:'English',
        duration: '2 hours',
        icon:<img src={Image1} className="icon"/>,
    },
    {
        title:'English',
        duration: '2 hours',
        icon:<img src={Image1} className="icon"/>,
    },
]

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHeader/> 
            <div className="user--profile">
                <div className="user--details">
                    <img src={Image1} alt=""></img>
                    <h3 className="username">Xolani Mchunu</h3>
                    <span className="profession">Developer</span>
                </div>
                 <div className="user-course">
                    {course.map((course) => (
                        <div className="course">
                            <div className="course-detail">
                                <div className="course-cover">{course.icon}</div>
                                <div className="course-name">
                                    <h5 className="title">{course.title}</h5>
                                    <span className="duration">{course.duration}</span>
                                </div>
                            </div>
                            <div className="action">:</ div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    );
}

export default Profile;