import React from "react";
import './Notifications.css'
import './App.css';
import { getFullYear, getFooterCopy } from "../utils/utils";
import HolbertonLogo from '../assets/holberton-logo.jpg'
import Notifications from "./Notifications";

function App() {
  return (
    <>
      <header className="App-header">
        <img src={HolbertonLogo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password"></input>
          <button>OK</button>
        </form>
      </body>
      
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()} </p>
      </footer>
      <p>
        {Notifications()}
      </p>
    </>
  );
}

export default App