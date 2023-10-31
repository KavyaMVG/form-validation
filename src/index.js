import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router-dom";

import router from "./main";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {/* <BrowserRouter>
      <AppRouter />
    </BrowserRouter> */}
    {console.log(router)}
    <RouterProvider router={router} />
  </Provider>
);
