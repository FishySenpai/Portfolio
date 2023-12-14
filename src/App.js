import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  About,
  Contact,
  Projects,
} from "./components/index.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home id="home" />
              <About id="about" />
              <Projects id="projects" />
              <Contact id="contact" />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
