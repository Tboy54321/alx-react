import React from "react";
import { getLatestNotification } from "./utils";
import './Notifications.css'

export default function Notifications() {
    return (
        <div className="Notifications">
            <button
                style={{ position: "absolute", right: "2px", top: "2px", }}
                aria-label="Close"
                onClick={console.log("Close button has been clicked")}
            >
                <p>here</p>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}