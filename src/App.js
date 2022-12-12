import "./App.css";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
// import { Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import KidsSection from "./components/KidsSection";
import PlayGames from "./components/PlayGames";
import Footer from "./components/Footer";
import KidsUp from "./components/KidsUp";

function App() {
  return (
    <div>
      <Nav />
      <MainContent />
      <KidsSection />
      <PlayGames />
      <Footer />
    </div>
  );
}

export default App;
