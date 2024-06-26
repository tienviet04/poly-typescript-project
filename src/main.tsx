import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={routers} />
);
