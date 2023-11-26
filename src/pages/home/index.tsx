import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";

import { homeRoutes } from "./routes";

function Home() {
  return (
    <Routes>
      <Route path={homeRoutes.detail.template} element={<DetailPage />} />
      <Route path={homeRoutes.list.template} element={<ListPage />} />
    </Routes>
  );
}

export default Home;
