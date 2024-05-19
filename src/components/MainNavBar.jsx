import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FaHome, FaLeaf, FaMap, FaSearch, FaUserCircle } from "react-icons/fa";
import TopBackNav from "./TopBackNav";

const MainNavBar = () => {
  const location = useLocation();

  const isActive = (thisPath) => location.pathname === thisPath;

  return (
    <div id="MNB_container">
      <div className="nav_box">
        <Link className={`button_box ${isActive("/main") ? "active" : ""}`} to="/main">
          <div className="icon_box">
            <FaHome className="icon" />
          </div>
          <div className="text_box">홈</div>
        </Link>
        <Link className={`button_box ${isActive("/map") ? "active" : ""}`} to="/map">
          <div className="icon_box">
            <FaMap className="icon" />
          </div>
          <div className="text_box">지도</div>
        </Link>
        <Link className={`button_box ${isActive("/search") ? "active" : ""}`} to="/search">
          <div className="icon_box">
            <FaSearch className="icon" />
          </div>
          <div className="text_box">검색</div>
        </Link>
        <Link className={`button_box ${isActive("/auth_esg") ? "active" : ""}`} to="/auth_esg">
          <div className="icon_box">
            <FaLeaf className="icon" />
          </div>
          <div className="text_box">ESG 인증</div>
        </Link>
        <Link className={`button_box ${isActive("/my_page") ? "active" : ""}`} to="/my_page">
          <div className="icon_box">
            <FaUserCircle className="icon" />
          </div>
          <div className="text_box">마이페이지</div>
        </Link>
      </div>
    </div>
  );
};

export default MainNavBar;
