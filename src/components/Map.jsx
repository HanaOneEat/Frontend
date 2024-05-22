import React, { useEffect, useState } from "react";
import TopBackNav from "./TopBackNav";
import StoreContent from "./StoreContent";
import { Link } from "react-router-dom";

import MapImage from "../assets/images/MapTemp.jpg";
import MyLoc from "../assets/images/MyLoc.png";

import { FaLeaf } from "react-icons/fa";
import fetchStoreData from "../utils/fetchStoreData";

const Map = () => {
  const [selected, setSelected] = useState(-1);
  const [storeInfo, setStoreInfo] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const activeLeaf = async (index) => {
    if (index === selected) {
      setSelected(-1);
      setIsClicked(false);
    } else {
      setSelected(index);
      setIsClicked(true);
      const loadStore = async () => {
        const resData = await fetchStoreData(index);
        setStoreInfo(resData);
      };
      loadStore();
    }
  };

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
          <FaLeaf
            className={`icon loc_a ${isClicked && selected === 1 && "bigger"}`}
            onClick={() => activeLeaf(1)}
          />
          <FaLeaf
            className={`icon loc_b ${isClicked && selected === 2 && "bigger"}`}
            onClick={() => activeLeaf(2)}
          />
          <FaLeaf
            className={`icon loc_c ${isClicked && selected === 3 && "bigger"}`}
            onClick={() => activeLeaf(3)}
          />
          <FaLeaf
            className={`icon loc_d ${isClicked && selected === 4 && "bigger"}`}
            onClick={() => activeLeaf(4)}
          />
          <FaLeaf
            className={`icon loc_E ${isClicked && selected === 5 && "bigger"}`}
            onClick={() => activeLeaf(5)}
          />
          <div className="my_loc_box">
            <img className="my_loc" src={MyLoc} alt="내 위치" />
          </div>
        </div>
        {storeInfo && (
          <Link
            className={`store_box ${isClicked ? "" : "pop_down"}`}
            to={`/store_details/${selected}`}
          >
            <StoreContent storeInfo={storeInfo} index={selected - 1} />
          </Link>
        )}
      </div>
      ;
    </>
  );
};

export default Map;
