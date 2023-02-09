import React from "react";
import { GlobalStyle } from "./styles/global.js";
import "./styles/fontProvider.css";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
