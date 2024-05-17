import React from "react";

import NavImg from "../assets/images/MainNav.jpg";

const BotNavBar = () => {
  return (
    <div id="BNV_container">
      <img className="nav_image" src={NavImg} alt="메인 Nav 이미지" />
      {/* <button className="nav_button">홈</button>
      <button className="nav_button">이벤트</button>
      <button className="nav_button">MY</button>
      <button className="nav_button">머니샵</button>
      <button className="nav_button">전체</button> */}
    </div>
  );
};

export default BotNavBar;
