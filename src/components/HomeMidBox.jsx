import React from "react";

import MainBackground from "../assets/images/MainBackground.jpg";

const HomeMidBox = () => {
  return (
    <div id="HMB_container">
      <div className="horiz_box">
        <div className="content_container">
          <div className="content_box"></div>
          <div className="content_box"></div>
        </div>
      </div>
      <div className="bottom_text_box">
        <span className="text">41종 통화 전체 조회</span>
      </div>
      <img className="background_image" src={MainBackground} alt="메인 페이지 배경" />
    </div>
  );
};

export default HomeMidBox;
