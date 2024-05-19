import React from "react";

import tempImage from "../assets/images/tempStore.png";
import { RiMegaphoneFill } from "react-icons/ri";
import { FaLeaf, FaStar } from "react-icons/fa";

const StoreContent = ({ storeInfo }) => {
  return (
    <div className="store_container">
      <div className="store_image_box">
        <img className="store_image" src={tempImage} alt="가게 이미지" />
      </div>
      <div className="store_text_box">
        <div className="name_box">
          <div className="name">{storeInfo.name}</div>
        </div>
        <div className="intro_box">
          <RiMegaphoneFill className="icon" />
          <div className="intro">{storeInfo.intro}</div>
        </div>
        <div className="score_box">
          <FaStar className="icon" />
          <div className="score">{storeInfo.score}</div>
          <div className="reviews">
            ({storeInfo.reviews >= 1000 ? Math.floor(storeInfo.reviews / 1000) + "," : ""}
            {storeInfo.reviews % 1000})
          </div>
        </div>
        <div className="point_box">
          <FaLeaf className="icon" />
          <div className="point">{storeInfo.point}</div>
          <div className="count_box">
            ({storeInfo.count}회/{storeInfo.period}개월)
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
