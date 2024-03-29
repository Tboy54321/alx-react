import React from "react";
import './Notifications.css'
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";
import HolbertonLogo from './holberton-logo.jpg'

function App() {
  return (
    <>
      <header className="App-header">
        <img src={HolbertonLogo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()} </p>
      </footer>
    </>
  );
}

export default App