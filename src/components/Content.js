import React from "react";
import '../style/content.css';
import ContentHeader from "./ContentHeader";
import Card from "./Card";
import Teacher from "./Teacher";
const Content = () => {
    return (
    <div className="Content">
        <ContentHeader/>
        <Card/>
        <Teacher/>
    </div>
    );
}

export default Content;