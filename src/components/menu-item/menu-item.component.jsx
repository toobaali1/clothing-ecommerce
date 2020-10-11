import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl,size}) => {
    return(
        <div className={`${size} menu-item`}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h2>{title.toUpperCase()}</h2>
                <span>SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;