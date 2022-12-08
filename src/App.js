import "./App.css";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import KidsSection from "./components/KidsSection";

function App() {
  return (
    <div>
      <Nav />
      <MainContent />
      <KidsSection />
    </div>
  );
}

export default App;
