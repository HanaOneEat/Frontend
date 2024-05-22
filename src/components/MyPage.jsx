import React, { useEffect, useState } from "react";
import { FaChevronRight, FaLeaf } from "react-icons/fa";
import TopBackNav from "./TopBackNav";

import Menu from "../assets/images/Mypage_menu.png";
import { Link, useParams } from "react-router-dom";
import fetchUserInfo from "../utils/fetchUserInfo";
import Loading from "./Loading";
import fetchStoreOfUser from "../utils/fetchStoreOfUser";

import Store1 from "../assets/images/Store_1.png";
import Store2 from "../assets/images/Store_2.jpg";
import Store3 from "../assets/images/Store_3.png";

const MyPage = () => {
  const { memberId } = useParams();
  const storeImgList = [Store1, Store2, Store3];

  //axios
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [storeOfUser, setStoreOfUser] = useState(null);
  useEffect(() => {
    const loadAllData = async () => {
      setIsLoading(true);
      const resDataUser = await fetchUserInfo(memberId);
      const resDataStore = await fetchStoreOfUser(memberId);
      setUserInfo(resDataUser);
      setStoreOfUser(resDataStore);
      setIsLoading(false);
    };
    loadAllData();
  }, []);

  if (isLoading || !userInfo || !storeOfUser) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
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
    let pointSum = list.reduce((acc, cur) => acc + cur.esgScore, 0);
    return (
      <div className="list_box">
        <div className="whole_store_box">
          {list.map((value, index) => (
            <Link key={index} to={`/store_details/${index + 1}`}>
              <div className="per_store">
                <div className="name">가게 {index + 1}</div>
                {/* <div className="name">{value.name}</div> */}
                <img src={storeImgList[index]} alt="가게 이미지" />
                <div className="point">
                  {value.esgScore.toLocaleString("ko-KR")}
                  <FaLeaf className="leaf_icon" />
                  <FaChevronRight className="right_icon" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="point_sum">
          총 {pointSum} <FaLeaf className="leaf_icon" />
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
        <>
          <div className="text_box">
            <div className="title">안녕하세요, {userInfo.name}님!</div>
          </div>
          <div className="scrollable">
            <div>
              <div className="money_box content_box temp_box_shadow">
                <div className="title">보유 하나머니</div>
                <div className="money">{userInfo.money.toLocaleString("ko-KR")}원</div>
                <div className="bot_box">
                  <div className="free">무료송금</div>
                  <div className="charge">충전하기</div>
                </div>
              </div>
              <div className="esg_point_box content_box temp_box_shadow">
                <div className="title">내 ESG 점수</div>
                <EsgPointContent list={storeOfUser.storeMyList} />
              </div>
              <div className="menu_box temp_box_shadow">
                <Link to="/auth_esg" className="esg_button" />
                <img className="menu_img" src={Menu} alt="마이페이지 메뉴" />
              </div>
              <div className="cs_box">
                <ContentList
                  title={"고객만족센터"}
                  list={["공지사항", "자주 묻는 질문", "카카오톡 1:1 문의", "FAQ", "서비스 약관"]}
                />
              </div>
            </div>
          </div>
        </>
      </div>
      ;
    </>
  );
};

export default MyPage;
