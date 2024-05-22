import React from "react";

import { HiMiniArrowLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const TopBackNav = ({ noBg }) => {
  const currentLocation = useLocation();

  return (
    <div id="TBN_container" className={`${noBg ? "no_bg_bar" : ""}`}>
      <div className="back_box" onClick={() => window.history.back()}>
        {currentLocation.pathname.substring(0, 14) === "/store_details" ? (
          // <Link to="/map">

          <IoClose className="back_icon" />
        ) : (
          // </Link>
          <HiMiniArrowLeft className="back_icon" />
        )}
      </div>
    </div>
  );
};

export default TopBackNav;
