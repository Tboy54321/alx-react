import React from "react";
import { getLatestNotification } from "../utils/utils";
import './Notifications.css'
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";

export default function Notifications() {
    return (
        <div className="Notifications">
            <button
                onClick={console.log("Close button has been clicked")}
                style={{ position: "absolute", top: "5px", right: "3px", background: "none", border: "none", fontWeight: "bold", cursor: "pointer"}}
                aria-label="Close"
            >
                <img src={closeIcon} alt="closeIcon" width="13px"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available"/>
                <NotificationItem type="urgent" value="New resume available"/>
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
        </div>
    )
}