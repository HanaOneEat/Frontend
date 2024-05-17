import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Main from "./Main";
import BotNavBar from "./components/BotNavBar"; // BotNavBar 컴포넌트를 임포트
import Main from "./components/Main";
import AuthESG from "./components/AuthESG";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hana_oneit" element={<Main />} />
          <Route path="/auth_esg" element={<AuthESG />} />
        </Routes>
      </div>
      <BotNavBar />
    </Router>
  );
}

export default App;
