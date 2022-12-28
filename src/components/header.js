import React from "react";
import "./Header.css";

const Header=({ imageSrc }) => {
    return(
        <div className="Header">
            <img src={imageSrc} alt="Vazne" className="Header__image"/>
            <p className="Header__subtitle">فروشگاه و باشگاه ورزشی در خانه های شما </p>
        </div>
    );

};
export default Header;
