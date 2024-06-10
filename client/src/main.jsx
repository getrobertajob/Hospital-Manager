// imports
import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// To hold which text should display in the header depending on which view is loaded
// added the routing for the right header button aswell
export const HeaderH1Text = createContext();

function Main() {
  const [HeaderText, setHeaderH1Text] = useState("Hospital Manager");
  const [headerBtnRight, setHeaderBtnRight] = useState({ text: "", to: "", disabled: false });

  return (
    <HeaderH1Text.Provider value={{ HeaderText, setHeaderH1Text, headerBtnRight, setHeaderBtnRight }}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </HeaderH1Text.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
