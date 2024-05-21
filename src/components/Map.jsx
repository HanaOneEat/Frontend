import React, { useEffect, useState } from "react";
import TopBackNav from "./TopBackNav";
import StoreContent from "./StoreContent";
import { Link } from "react-router-dom";

import Store2 from "../assets/images/Store_2.png";
import MapImage from "../assets/images/MapTemp.jpg";
import MyLoc from "../assets/images/MyLoc.png";

import { FaLeaf } from "react-icons/fa";

const Map = () => {
  const [thisStore, setThisStore] = useState({
    name: "유기농 가구 공방 가구조아",
    image: Store2,
    intro: "우리집.가구는.유기농.나무로만.만듭니다,,^^~*",
    score: 4.1,
    reviews: 512,
    point: 100,
    count: 12,
    period: 12,
  });

  const [isClicked, setIsClicked] = useState(false);

  const storeId = "test";

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <>
      <TopBackNav />
      <div id="Map_container" className="cont">
        <div className="text_box">
          <div className="title">ESG 가게 위치</div>
          <div className="subtext">근처의 ESG 실천 가게의 위치를 나타내요</div>
        </div>
        <div className="map_box">
          <img className="map_bg" src={MapImage} alt="임시 지도" />
          <FaLeaf className="icon loc_a" />
          <FaLeaf className="icon loc_b" />
          <FaLeaf className="icon loc_c" />
          <FaLeaf className="icon loc_d" />
          <FaLeaf
            className={`icon loc_E ${isClicked && "bigger"}`}
            onClick={() => setIsClicked(!isClicked)}
          />
          <div className="my_loc_box">
            <img className="my_loc" src={MyLoc} alt="내 위치" />
          </div>
        </div>
        <Link
          className={`store_box ${isClicked ? "" : "pop_down"}`}
          to={`/store_details/${storeId}`}
        >
          <StoreContent storeInfo={thisStore} />
        </Link>
      </div>
      ;
    </>
  );
};

export default Map;
