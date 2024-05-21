import React, { useState } from "react";
import TopBackNav from "./TopBackNav";
import StoreContent from "./StoreContent";
import { Link } from "react-router-dom";

const Map = () => {
  const [thisStore, setThisStore] = useState({
    name: "한식뷔페 대가 - 청라점",
    intro: "저는 기부 중독이에요. 기부 조아",
    score: 4.9,
    reviews: 1234,
    point: 300,
    count: 18,
    period: 6,
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
