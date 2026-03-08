import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  About,
  Contact,
  Projects,
  Footer,
} from "./components/index.js";
import CursorCircle from "./components/CursorCircle.js";

function App() {
  return (
    <div className="App max-w-screen overflow-hidden">
      <CursorCircle />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Contact  />
              <Footer/>
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
