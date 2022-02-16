import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/style.scss";
import Calculator from "./components/Calculator/Calculator";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <main className="container">
      <Calculator />
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
