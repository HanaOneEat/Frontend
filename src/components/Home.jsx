import React from "react";
import HomeTopBar from "./HomeTopBar";
import HomeMidBox from "./HomeMidBox";
import { HomeBotBox } from "./HomeBotBox";

const Home = () => {
  return (
    <div id="Home_container">
      <HomeTopBar />
      <HomeMidBox />
      <HomeBotBox />
    </div>
  );
};

export default Home;
