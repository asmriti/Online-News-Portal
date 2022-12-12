import "./App.css";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import KidsSection from "./components/KidsSection";
import PlayGames from "./components/PlayGames";
import Footer from "./components/Footer";
import KidsUp from "./components/KidsUp";

import International from "./components/Categories/International";
import Home from "./components/Categories/Home";

function App() {
  return (
    <div>
      <Nav />
      <MainContent />
      <KidsUp />
      <KidsSection />
      <PlayGames />
      <Footer />
      <Home />
    </div>
  );
}

export default App;
