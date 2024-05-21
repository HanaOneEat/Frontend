import React, { useState } from "react";
import TopBackNav from "./TopBackNav";
import StoreContent from "./StoreContent";
import { Link } from "react-router-dom";

import Store2 from "../assets/images/Store_2.png";

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

  const storeId = "test";

  return (
    <>
      <TopBackNav />
      <div id="Map_container" className="cont">
        <div className="text_box">
          <div className="title">ESG 가게 위치</div>
          <div className="subtext">근처의 ESG 실천 가게의 위치를 나타내요</div>
        </div>
        <div className="map_box"></div>
        <Link className="store_box" to={`/store_details/${storeId}`}>
          <StoreContent storeInfo={thisStore} />
        </Link>
      </div>
      ;
    </>
  );
};

export default Map;
