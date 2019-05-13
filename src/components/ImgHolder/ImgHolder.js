import React from "react";
import "./style.css"

const ImgHolder = props => (
    <div className="card" onClick={() => props.HandleImages(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default ImgHolder;