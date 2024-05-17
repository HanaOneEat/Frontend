import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Main from "./Main";
import BotNavBar from "./components/BotNavBar"; // BotNavBar 컴포넌트를 임포트

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/main" element={<Main />} /> */}
        </Routes>
        <BotNavBar />
      </div>
    </Router>
  );
}

export default App;
