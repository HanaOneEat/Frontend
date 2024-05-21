import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import AuthESG from "./components/AuthESG";
import MainNavBar from "./components/MainNavBar";
import Map from "./components/Map";
import MyPage from "./components/MyPage";
import StoreDetails from "./components/StoreDetails";

function App() {
  const currentLocation = useLocation(); //현재 path
  const noBotBar =
    currentLocation.pathname === "/" ||
    currentLocation.pathname.substring(0, 14) === "/store_details"; //Home인가

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/my_page" element={<MyPage />} />
        <Route path="/auth_esg" element={<AuthESG />} />
        <Route path="store_details/:storeId" element={<StoreDetails />} />
      </Routes>
      {!noBotBar && <MainNavBar />}
    </div>
  );
}

export default App;
