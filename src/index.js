import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App2 from "./App2";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App2 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();