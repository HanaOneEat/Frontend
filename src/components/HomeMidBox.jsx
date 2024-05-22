import React from "react";
import { Link } from "react-router-dom";

import MainBackground from "../assets/images/MainBackground.jpg";
import Hanamoney_logo from "../assets/images/hanamoney_logo.png";
import Earth from "../assets/images/earth.png";
import NewIcon from "../assets/images/New_ver1.png";
import Travellog from "../assets/images/travellog_img.png";
import HanaeonLogo from "../assets/images/Hanaeon_logo.png";

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

          <div className="content_box blue_box">
            <div className="new_icon_box">
              <img className="new_icon" src={NewIcon} alt="New 아이콘 이미지" />
            </div>
            <div className="top_box">
              <div className="logo_box">
                <img src={HanaeonLogo} alt="하나이온 로고" />
              </div>
              <div className="text_box">
                <div className="title">하나이온</div>
                <div className="about">
                  손님과 가게를
                  <br />
                  하나로 연결하는
                  <br />
                  <div>ESG 플랫폼</div>
                </div>
              </div>
            </div>
            <Link to="main/first" className="bot_button">
              서비스로 이동
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom_text_box">
        <div className="text_box">
          <img className="earth_icon" src={Earth} alt="지구본 이미지" />
          <span className="text">
            <span>41종 통화 </span>
            전체조회
          </span>
        </div>
        <img className="travellog_image" src={Travellog} alt="트래블로그 이미지" />
      </div>
      <img className="background_image" src={MainBackground} alt="메인 페이지 배경" />
    </div>
  );
};

export default HomeMidBox;
