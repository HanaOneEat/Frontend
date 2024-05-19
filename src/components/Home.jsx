import React from "react";
import HomeTopBar from "./HomeTopBar";
import HomeMidBox from "./HomeMidBox";
import { HomeBotBox } from "./HomeBotBox";
import BotNavBar from "./BotNavBar";

const Home = () => {
  return (
    <div id="Home_container">
      <HomeTopBar />
      <HomeMidBox />
      <HomeBotBox />
      <BotNavBar />
    </div>
  );
};

export default Home;
