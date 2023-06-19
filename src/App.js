import "./App.css";
import Home from "./pages/Home.js";
import Juego from "./pages/Juego.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index exact path="/" element={<Home />}></Route>
        <Route exact path="/juego" element={<Juego />}></Route>
      </Routes>
    </Router>
  )
}
