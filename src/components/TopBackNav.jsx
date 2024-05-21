import React from "react";

import { HiMiniArrowLeft } from "react-icons/hi2";

const TopBackNav = ({ noBg }) => {
  return (
    <div id="TBN_container" className={`${noBg ? "no_bg_bar" : ""}`}>
      <div className="back_box">
        <HiMiniArrowLeft className="back_icon" />
      </div>
    </div>
  );
};

export default TopBackNav;
