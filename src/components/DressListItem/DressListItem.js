import React from "react";
import "./DressListItem.css";
import imageFile1 from "../../assets/images/seraphina.png";

export default () => (
  <div className="one-item">
    <div className="dress-list-item-container">
      <img src={imageFile1} alt="image" />
    </div>
    <div>
      <h5 className="dress-name">{"Seraphina"}</h5>
    </div>
  </div>
);
