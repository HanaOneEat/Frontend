import React, { useContext, useEffect, useState } from "react";
import TopBackNav from "./TopBackNav";
import StoreContent from "./StoreContent";
import fetchAllStores from "../utils/fetchAllStores";

import Loading from "./Loading";
import NumberInfos from "../contexts/NumberInfos";
import { Link } from "react-router-dom";

const Main = () => {
  //contextAPI
  const { numberData, updateNumberData } = useContext(NumberInfos);

  //axios
  const [storeList, setStoreList] = useState(null);
  const [isLoading, setIsLoading] = useState(false); //초기 로드값 일단 false
  useEffect(() => {
    const loadAllStores = async () => {
      setIsLoading(true);
      const resData = await fetchAllStores();
      setStoreList(resData);
      setIsLoading(false);
    };
    loadAllStores();
    console.log(numberData);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // if (!storeList) {
  //   return <div>주변에 가게가 존재하지 않습니다.</div>;
  // }

  return (
    <>
      <TopBackNav />
      <div id="Main_container" className="cont">
        <div className="text_box">
          <div className="title">ESG 가게 목록</div>
          <div className="subtext">근처의 ESG 활동을 실천 중인 가게 목록이에요</div>
        </div>
        {storeList &&
          storeList.map((value, index) => (
            <Link to={`/store_details/${index + 1}`}>
              <StoreContent key={index} storeInfo={value} index={index} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Main;
