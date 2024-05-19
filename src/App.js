import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import AuthESG from "./components/AuthESG";
import MainNavBar from "./components/MainNavBar";
import Map from "./components/Map";

function App() {
  const currentLocation = useLocation(); //현재 path
  const isHome = currentLocation.pathname === "/"; //Home인가

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/auth_esg" element={<AuthESG />} />
      </Routes>
      {!isHome && <MainNavBar />}
    </div>
  );
}

export default App;
