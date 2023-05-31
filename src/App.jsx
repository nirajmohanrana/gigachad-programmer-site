import React from "react";
import { Route, Routes } from "react-router-dom";

import DSAList from "./pages/DSAList";
import AptitudeList from "./pages/AptitudeList";
import Aptitude from "./pages/Aptitude";
import DSA from "./pages/DSA";
import About from "./pages/About";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="dsa" element={<DSAList />} />
        <Route path="aptitude" element={<AptitudeList />} />
        {/*  */}
        <Route path="dsa">
          <Route path=":dsaId" element={<DSA />} />
        </Route>
        {/*  */}
        <Route path="aptitude">
          <Route path=":aptId" element={<Aptitude />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
