import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ParallaxProvider } from "react-scroll-parallax";


ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("app")
);

