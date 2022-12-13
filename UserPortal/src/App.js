import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import PlayGames from "./components/PlayGames";
import MainContent from "./components/MainContent";
import PostArticle from "./components/PostArticle";
import KidsSection from "./components/KidsSection";
import CommunitySection from "./components/CommunitySection";

import Home from "./pages/Home";
import Community from "./pages/Community";
import ArticlePost from "./pages/ArticlePost";
import International from "./components/Categories/International";
import Culture from "./components/Categories/Culture";
import Business from "./components/Categories/Business";
import Entertainment from "./components/Categories/Entertainment";
import Food from "./components/Categories/Food";
import Health from "./components/Categories/Health";
import LifeStyle from "./components/Categories/LifeStyle";
import Nature from "./components/Categories/Nature";
import Politics from "./components/Categories/Politics";
import Sports from "./components/Categories/Sports";
import Travel from "./components/Categories/Travel";
import Technology from "./components/Categories/Technology";
import Polls from "./pages/Polls";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/community">
          <Community />
        </Route>

        <Route path="/post-article">
          <ArticlePost />
        </Route>

        <Route path="/kids-section">
          <KidsSection />
        </Route>

        <Route path="/polls">
          <Polls />
        </Route>

        <Route path="/international">
          <International />
        </Route>

        <Route path="/politics">
          <Politics />
        </Route>

        <Route path="/business">
          <Business />
        </Route>

        <Route path="/technology">
          <Technology />
        </Route>

        <Route path="/entertainment">
          <Entertainment />
        </Route>

        <Route path="/health">
          <Health />
        </Route>

        <Route path="/food">
          <Food />
        </Route>

        <Route path="/travel">
          <Travel />
        </Route>

        <Route path="/lifestyle">
          <LifeStyle />
        </Route>

        <Route path="/sports">
          <Sports />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
