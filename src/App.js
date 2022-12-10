import "./App.css";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import KidsSection from "./components/KidsSection";
import PlayGames from "./components/PlayGames";

function App() {
  return (
    <div>
      <Nav />
      <MainContent />
      <KidsSection />
      <PlayGames />
    </div>
  );
}

export default App;
