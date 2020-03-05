import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/layout/navbar/NavBar";
import AboutPage from "./components/about/AboutPage";
import Home from "./components/layout/landing/HomePage";
import GalleryView from "./components/gallery/GalleryView";
import Footer from "./components/layout/footer/Footer";

import ProfileGodstime from "./components/profile/profile1/ProfileGodstime";
import ProfileKenny from "./components/profile/profile2/ProfileKenny";
import ProfileShola from "./components/profile/profile3/ProfileShola";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <AboutPage /> */}
        <Route exact path="/" component={Home} />

        <div className="container">
          <Route exact path="/godstime" component={ProfileGodstime} />
          <Route exact path="/kehinde" component={ProfileKenny} />
          <Route exact path="/shola" component={ProfileShola} />
        </div>

        <Route exact path="/gallery" component={GalleryView} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
