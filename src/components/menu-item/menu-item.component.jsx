import React from "react";
import "./menu-item.styles.scss";
import {withRouter} from "react-router-dom";

const MenuItem = ({title, imageUrl,size, linkUrl, history,match}) => {
    return(
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}} />
            <div className="content">
                <h2>{title.toUpperCase()}</h2>
                <span>SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);