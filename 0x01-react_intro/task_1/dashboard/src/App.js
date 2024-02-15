import './App.css';
import { getFullYear, getFooterCopy } from "./utils";
import React from "react";

function App() {
  return (
    <div>
      <p>{getFullYear()} - {getFooterCopy()} </p>
    </div>
  )
}

export default App;