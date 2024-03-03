import React from "react";
import HolbertonLogo from '../assets/holberton-logo.jpg';
import "./Header.css"

export default function Header() {
    return (
        <header className="App-header">
            <img src={HolbertonLogo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </header>
    )    
}