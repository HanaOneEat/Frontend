import React from "react";

import crown from "../assets/images/crown.png";
import pay_icon from "../assets/images/pay_icon.png";

import { LuScanLine } from "react-icons/lu";
import { SlBell } from "react-icons/sl";

const HomeTopBar = () => {
  return (
    <div id="HTB_container">
      <div className="left_box">
        <img className="icon" src={crown} alt="하나 로고"></img>
        <span className="text">
          혜택마스터는
          <br />
          이렇게 혜택 받았어요
        </span>
      </div>
      <div className="right_box">
        {/* <img className="pay_icon" src={pay_icon} alt="페이 버튼 아이콘" /> */}
        <div className="pay_box">
          <LuScanLine className="pay_icon" />
          <div className="pay_redbar" />
        </div>
        {/* <div className="bell_icon"> */}
        <SlBell className="bell_icon" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomeTopBar;
