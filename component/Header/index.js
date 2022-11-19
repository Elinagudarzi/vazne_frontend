import React from "react";
import "./header.css";

const Header=({ imageSrc }) => {
    return(
        <div className="Header">
            <img src={imageSrc} alt="Vazne" className="Header__image"/>
            <h1 className="Header__title">وزنه</h1>
        </div>
    );

};
export default Header;
