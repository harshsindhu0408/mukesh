import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Footer from "./components/common/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen">
      <App />
      <Footer/>
    </div>
  </React.StrictMode>
);
