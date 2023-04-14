import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

import data from "./assets/data.json";

import "./sass/style.sass";
import "./sass/adaptive.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/destination"
            element={<Destination info={data.destinations} />}
          ></Route>
          <Route path="/crew" element={<Crew info={data.crew} />}></Route>
          <Route
            path="/technology"
            element={<Technology info={data.technology} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
