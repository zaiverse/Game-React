import React from "react";

const ImgHolder = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.spec} src={props.src} />
        </div>
    </div>
);

export default ImgHolder;