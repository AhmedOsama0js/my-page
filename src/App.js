import React from "react";
import "./App.css";
import Hero from "./pages/Hero/Hero";
import Contact from "./pages/Contact/ContactMe";
import Projects from "./pages/Projects/Projects";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="main-container">
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
