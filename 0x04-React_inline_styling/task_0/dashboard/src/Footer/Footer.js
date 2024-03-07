import { getFullYear, getFooterCopy } from "../utils/utils";
import React from "react"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()} </p>
        </footer>
    )
    
}