import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

ReactDOM.render(
  <div>
  <Header />
    <Note />
    <App />
    <Footer />
  </div>,
  document.getElementById("root")
);
