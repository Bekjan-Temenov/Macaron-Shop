import React from "react";
import img_1 from '../../assets/sherniaz/Rectangle 322 (1).svg'
import "./Info.css"

const Infoimg = () => {
  return (
    <div className="info-content-img">
      <img src={img_1} alt="" />
      <br />
      <div className="info-content-img-in">
        <img src={img_1}  alt="" />
        <img src={img_1}  alt="" />
        <img src={img_1}  alt="" />
      </div>
    </div>
  );
};

export default Infoimg;
