import React from "react";

import LandingComp from "../assets/images/Landing_content.png";
import { FaLeaf } from "react-icons/fa";

const Landing = () => {
  return (
    <div id="Landing_container">
      <div className="box">
        <div className="ani_box">
          <div className="but_bg">
            <div className="text">ESG</div>
            <div className="cover">
              <FaLeaf className="icon" />
            </div>
          </div>
        </div>
        <img src={LandingComp} alt="랜딩 이미지" />
      </div>
    </div>
  );
};

export default Landing;
