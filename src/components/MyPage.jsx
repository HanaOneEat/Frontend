import React from "react";
import { FaChevronRight, FaLeaf } from "react-icons/fa";
import TopBackNav from "./TopBackNav";

import Menu from "../assets/images/Mypage_menu.png";
import { Link } from "react-router-dom";

const MyPage = () => {
  const userInfo = {
    name: "이상준",
    hanaMoney: 22000,
    esgPoint: [
      { store: "가게 1", point: 100 },
      { store: "가게 2", point: 320 },
      { store: "가게 3", point: 60 },
      { store: "가게 4", point: 1030 },
    ],
  };

  const EsgPointContent = ({ list }) => {
    if (list.length === 0) {
      return (
        <div className="list_box without_list">
          <div className="without_point">
            등록된 가게가 없어요
            <div className="call">가게 등록하기</div>
          </div>
        </div>
      );
    }
    let pointSum = list.reduce((acc, cur) => acc + cur.point, 0);
    return (
      <div className="list_box">
        {list.map((value) => (
          <div className="per_store">
            <div className="name">{value.store}</div>
            <div className="point">
              {value.point.toLocaleString("ko-KR")}
              <FaLeaf className="leaf_icon" />
              <FaChevronRight className="right_icon" />
            </div>
          </div>
        ))}
        <div className="point_sum">
          총 {pointSum.toLocaleString("ko-KR")} <FaLeaf className="leaf_icon" />
        </div>
      </div>
    );
  };

  const ContentList = ({ title, list }) => {
    return (
      <div className="content_list_box">
        <div className="title">{title}</div>
        <div className="list_box">
          {list.map((value, index) => (
            <div key={index} className="list_content">
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <TopBackNav noBg={true} />
      <div id="MP_container" className="cont">
        <div className="text_box">
          <div className="title">안녕하세요, {userInfo.name}님!</div>
        </div>
        <div className="scrollable">
          <div>
            <div className="money_box content_box temp_box_shadow">
              <div className="title">보유 하나머니</div>
              <div className="money">{userInfo.hanaMoney.toLocaleString("ko-KR")}원</div>
              <div className="bot_box">
                <div className="free">무료송금</div>
                <div className="charge">충전하기</div>
              </div>
            </div>
            <div className="esg_point_box content_box temp_box_shadow">
              <div className="title">내 ESG 점수</div>
              <EsgPointContent list={userInfo.esgPoint} />
            </div>
            <div className="menu_box temp_box_shadow">
              <Link to="/auth_esg" className="esg_button" />
              <img className="menu_img" src={Menu} alt="마이페이지 메뉴" />
            </div>
            {/* <div className="store_box content_box">
              <ContentList title={"가게 관리"} list={["가게 등록하기", "ESG 활동 인증하기"]} />
            </div> */}
            {/* <div className="present_box content_box">
              <ContentList
                title={"ESG 혜택 상품"}
                list={[
                  "ESG 점수 우대 대출 알아보기",
                  "ESG 포인트 혜택 상점",
                  "ESG 포인트 등급 확인하기",
                ]}
              />
            </div> */}
            <div className="cs_box">
              <ContentList
                title={"고객만족센터"}
                list={["공지사항", "자주 묻는 질문", "카카오톡 1:1 문의", "FAQ", "서비스 약관"]}
              />
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default MyPage;
