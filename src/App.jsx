import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerPage from "./pages/PlayerPage";
import HomePage from "./pages/HomePage";
import MusicPage from "./pages/MusicPage";
import LosowaniePage from "./pages/LosowaniePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/losowanie" element={<LosowaniePage />} />
        <Route path="/music/player/:id" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;