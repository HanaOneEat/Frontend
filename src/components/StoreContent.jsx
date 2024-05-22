import React, { useContext, useEffect } from "react";

import tempImage from "../assets/images/tempStore.png";
import { RiMegaphoneFill } from "react-icons/ri";
import { FaLeaf, FaStar } from "react-icons/fa";

import Store1 from "../assets/images/Store_1.png";
import Store2 from "../assets/images/Store_2.jpg";
import Store3 from "../assets/images/Store_3.png";
import Store4 from "../assets/images/Store_4.jpg";
import Store5 from "../assets/images/Store_5.jpg";
import Store6 from "../assets/images/Store_6.jpg";
import NumberInfos from "../contexts/NumberInfos";

const StoreContent = ({ storeInfo, index }) => {
  const { numberData, updateNumberData } = useContext(NumberInfos);

  // 유효성 검사를 통한 안전한 접근
  const currentData = numberData[index] || { reviews: 0, count: 0, duration: 0 }; // 기본값 제공
  const imageList = [Store1, Store2, Store3, Store4, Store5, Store6];

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
          <div className="reviews">({currentData.reviews.toLocaleString("ko-KR")})</div>
        </div>
        <div className="point_box">
          <FaLeaf className="icon" />
          <div className="point">{storeInfo.esgScore}</div>
          <div className="count_box">
            ({currentData.count.toLocaleString("ko-KR")}회/{currentData.duration}개월)
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
