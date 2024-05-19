import React from "react";
import TopBackNav from "./TopBackNav";

const MyPage = () => {
  const userInfo = {
    name: "이상준",
    hanaMoney: 22000,
    esgPoint: [
      { store: "가게 1", point: 100 },
      { store: "가게 2", point: 100 },
    ],
  };

  return (
    <>
      <TopBackNav />
      <div id="MP_container" className="cont">
        <div className="text_box">
          <div className="title">안녕하세요, {userInfo.name}님!</div>
        </div>
        <div className="scrollable">
          <div>
            <div className="money_container">
              <div className="money_box">
                <div className="title">보유 하나머니</div>
                <div className="money">{userInfo.hanaMoney.toLocaleString("ko-KR")}원</div>
                <div className="bot_box">
                  <div className="free">무료송금</div>
                  <div className="charge">충전하기</div>
                </div>
              </div>
            </div>
            <div className="esg_point_box"></div>
            <div className="store_box"></div>
            <div className="present_box"></div>
            <div className="cs_box"></div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default MyPage;
