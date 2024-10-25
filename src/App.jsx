import React from "react";
import Home from "./pages/Home";
import Next from "./pages/Nextpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<Next />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
