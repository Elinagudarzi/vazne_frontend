import React from "react";
import "./MainFold.css";
import {useInView} from "react-intersection-observer";

const MainFold = ({ imageSrc, title, subtitle, flipped }) => {
    const {ref, inView} = useInView({
      /*optional options*/
      threshold:0.4,
     });
    
     const rendercontent =() =>{
        if(!flipped){
            return(
                <>
                <img scr={imageSrc} alt="vazne" className="MainFold__image"/>
                  <div className="MainFold__content">
                    <h1 className="MainFold__title" link='#'>{title}</h1>
                    <p>{subtitle}</p>
                  </div>
                </>
            );
            }
        else{
            return (
                <>
                  <div className="MainFold__content">
                    <h1 className="MainFold__title">{title}</h1>
                    <p>{subtitle}</p>
                  </div>
                  <img src={imageSrc} alt="Vazne" className="MainFold__image" />
                </>
            );
        }
    };
    return(
      <div className={inView ? "MainFold MainFold--zoom":" MainFold"} ref={ref} >
        {rendercontent()}
      </div>
    );
};

export default MainFold;