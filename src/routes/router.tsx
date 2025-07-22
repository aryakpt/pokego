import React from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { paths } from "./paths";

import Home from "../pages/home";

const Error = () => <div>Something Wrong Happened!</div>;

const routes = createRoutesFromElements(
  <Route element={<Outlet />}>
    <Route
      path={paths.home + "/*"}
      element={<Home />}
      errorElement={<Error />}
    />
  </Route>
);

export const router = createBrowserRouter(routes);
