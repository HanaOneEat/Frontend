import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import AuthESG from "./components/AuthESG";
import MainNavBar from "./components/MainNavBar";
import Map from "./components/Map";
import MyPage from "./components/MyPage";
import StoreDetails from "./components/StoreDetails";
import { Axios } from "axios";
import CameraApp from "./components/CameraApp";
import InputAmount from "./components/InputAmount";

// Axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const currentLocation = useLocation().pathname; //현재 path
  const noBotBar =
    currentLocation === "/" ||
    currentLocation.substring(0, 14) === "/store_details" || //Home인가
    currentLocation === "/camera" ||
    currentLocation.substring(0, 13) === "/input_amount";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/:first" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/my_page/:memberId" element={<MyPage />} />
        <Route path="/auth_esg" element={<AuthESG />} />
        <Route path="store_details/:storeId" element={<StoreDetails />} />
        <Route path="/camera" element={<CameraApp />} />
        <Route path="/input_amount/:toId" element={<InputAmount />} />
      </Routes>
      {!noBotBar && <MainNavBar />}
    </div>
  );
}

export default App;
