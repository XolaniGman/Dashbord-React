import React from "react";
import Image1 from '../react-icon/bi/a1.png';
import '../style/TeacheList.css'; 

const teacher =[
    {
        image: Image1,
        name: 'Prof. Xolani Mchunu',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image1,
        name: 'Prof. Xolani Mchunu',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image1,
        name: 'Prof. Xolani Mchunu',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image1,
        name: 'Prof. Xolani Mchunu',
        duration: '20 hours lesson',
        cost: '100'
    },
];
const Teacher = () => {
    return (
            <div className="teacher--list">
                <div className="list--header">
                    <h2>Teacher</h2>
                <select>
                    <option value="english">English</option>
                    <option value="Zulu">IsiZulu</option>
                </select>
                </div>
                <div className="list--container">
                    {teacher.map((teacher) => (
                        <div className="list">
                            <div className="teacher--detail">
                                <img src={teacher.image} alt={teacher.name}/>
                                <h2>{teacher.name}</h2>
                            </div>
                            <span>{teacher.duration} </span>
                            <span>{teacher.cost} </span>
                            <span className="teacher--todo">:</span>
                        </div>
                    )
                )}
                </div>
            </div>
      
    );
}

export default Teacher;