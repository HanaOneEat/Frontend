import React from "react";

import MainBackground from "../assets/images/MainBackground.jpg";
import Hanamoney_logo from "../assets/images/hanamoney_logo.png";

const HomeMidBox = () => {
  return (
    <div id="HMB_container">
      <div className="horiz_box">
        <div className="content_container">
          <div className="content_box green_box">
            <img className="icon" src={Hanamoney_logo} alt="하나머니 로고" />
            <div className="title">
              로그인 하고
              <br />
              하나머니 혜택을 즐겨요
            </div>
            <div className="bot_button">
              <div className="left">회원가입</div>
              <div className="gap_border" />
              <div className="right">로그인</div>
            </div>
          </div>
          <div className="content_box blue_box"></div>
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
