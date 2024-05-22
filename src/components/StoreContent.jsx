import React, { useContext, useEffect } from "react";

import tempImage from "../assets/images/tempStore.png";
import { RiMegaphoneFill } from "react-icons/ri";
import { FaLeaf, FaStar } from "react-icons/fa";

import Store1 from "../assets/images/Store_1.png";
import Store2 from "../assets/images/Store_2.jpg";
import Store3 from "../assets/images/Store_3.png";
import Store4 from "../assets/images/Store_4.jpg";
import Store5 from "../assets/images/Store_5.jpg";
import NumberInfos from "../contexts/NumberInfos";

const StoreContent = ({ storeInfo, index }) => {
  const { numberData, updateNumberData } = useContext(NumberInfos);

  const imageList = [Store1, Store2, Store3, Store4, Store5];

  return (
    <div className="store_container">
      <div className="store_image_box">
        <img className="store_image" src={imageList[index]} alt="가게 이미지" />
      </div>
      <div className="store_text_box">
        <div className="name_box">
          <div className="name">{storeInfo.name}</div>
        </div>
        <div className="intro_box">
          <RiMegaphoneFill className="icon" />
          <div className="intro">{storeInfo.oneSentence}</div>
        </div>
        <div className="score_box">
          <FaStar className="icon" />
          <div className="score">{storeInfo.rating}</div>
          <div className="reviews">({numberData[index].reviews.toLocaleString("ko-KR")})</div>
        </div>
        <div className="point_box">
          <FaLeaf className="icon" />
          <div className="point">{storeInfo.esgScore}</div>
          <div className="count_box">
            ({numberData[index].count.toLocaleString("ko-KR")}회/{numberData[index].duration}개월)
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
