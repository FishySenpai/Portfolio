import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  Services,
  Results,
  Process,
  Projects,
  Testimonials,
  About,
  Contact,
  Footer,
} from "./components/index.js";

function App() {
  return (
    <div className="App max-w-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Results />
              <Process />
              <Projects />
              <Testimonials />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
