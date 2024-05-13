import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BotNavBar } from "./components/BotNavBar";

function App() {
  return (
    <div className="App">
      <Home />
      <BotNavBar />
    </div>
  );
}

export default App;
