import React from "react";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { router } from "./routes/router";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
