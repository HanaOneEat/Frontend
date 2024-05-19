import React from "react";
import TopBackNav from "./TopBackNav";
import StoreContent from "./StoreContent";

const Main = () => {
  const tempStoreInfo = [
    {
      name: "한식뷔페 대가 - 청라점",
      intro: "저는 기부 중독이에요. 기부 조아",
      score: 4.9,
      reviews: 1234,
      point: 300,
      count: 18,
      period: 6,
    },
    {
      name: "유기농 가구 공방 가구조아",
      intro: "우리집.가구는.유기농.나무로만.만듭니다,,^^~*",
      score: 4.1,
      reviews: 512,
      point: 100,
      count: 12,
      period: 12,
    },
    {
      name: "친환경 비누가게 비누조아",
      intro: "ESG 최고~, 환경 지켜~, 비누 사조~",
      score: 4.7,
      reviews: 2496,
      point: 27,
      count: 5,
      period: 18,
    },
  ];

  return (
    <>
      <TopBackNav />
      <div id="Main_container" className="cont">
        <div className="text_box">
          <div className="title">ESG 가게 목록</div>
          <div className="subtext">근처의 ESG 활동을 실천 중인 가게 목록이에요</div>
        </div>
        {tempStoreInfo.map((value) => (
          <StoreContent storeInfo={value} />
        ))}
      </div>
    </>
  );
};

export default Main;
