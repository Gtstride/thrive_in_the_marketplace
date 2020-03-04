import React from "react";
import Header from "./components/header/Header";
import AboutPage from "./components/about/AboutPage";
import Home from "./components/home/HomePage";
import Footer from "./components/footer/Footer";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutPage />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
