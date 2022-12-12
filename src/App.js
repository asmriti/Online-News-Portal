import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import PlayGames from "./components/PlayGames";
import MainContent from "./components/MainContent";
import PostArticle from "./components/PostArticle";
import KidsSection from "./components/KidsSection";
import CommunitySection from "./components/CommunitySection";

import Home from "./pages/Home";
import Community from "./pages/Community";
import ArticlePost from "./pages/ArticlePost"

import "./App.css";

function App() {
  return (
    <div>
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

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
