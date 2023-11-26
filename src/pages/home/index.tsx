import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import GamePage from "./pages/Game";

import { homeRoutes } from "./routes";
import { GameProvider } from "./context/GameCtx";

function Home() {
  return (
    <Routes>
      <Route
        path={homeRoutes.game.template}
        element={
          <GameProvider>
            <GamePage />
          </GameProvider>
        }
      />
      <Route path={homeRoutes.detail.template} element={<DetailPage />} />
      <Route path={homeRoutes.list.template} element={<ListPage />} />
    </Routes>
  );
}

export default Home;
