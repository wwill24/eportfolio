import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Projects from "./routes/Projects"
import Contact from "./routes/Contact"

import { Route, Routes} from "react-router-dom"
import DijkstraPathVisualizer from "./routes/DijkstraPathVisualizer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/project" element = {<Projects />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/project/dijkstra-path-visualizer" element = {<DijkstraPathVisualizer />} />
      </Routes>
    </>
  );
}

export default App;
