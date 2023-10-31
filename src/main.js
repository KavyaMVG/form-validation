import React from "react";
import App from "./App";
import DisplayData from "./DisplayData";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/form-details",
    element: <DisplayData />,
  },
]);

export default router;
