import React from "react";

import { HiMiniArrowLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BsQrCodeScan } from "react-icons/bs";
import CameraApp from "./CameraApp";
const TopBackNav = ({ noBg }) => {
  const currentLocation = useLocation();

  return (
    <div id="TBN_container" className={`${noBg ? "no_bg_bar" : ""}`}>
      <div className="back_box">
        {currentLocation.pathname.substring(0, 14) === "/store_details" ? (
          <div className="detail_top_box">
            <IoClose className="back_icon" onClick={() => window.history.back()} />
            <Link to="/camera">
              <BsQrCodeScan className="qr_icon" />
            </Link>
          </div>
        ) : (
          <HiMiniArrowLeft className="back_icon" onClick={() => window.history.back()} />
        )}
      </div>
    </div>
  );
};

export default TopBackNav;
