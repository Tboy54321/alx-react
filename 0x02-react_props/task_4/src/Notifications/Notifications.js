import React from "react";
import { getLatestNotification } from "../utils/utils";
import './Notifications.css'
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import PropTypes from "prop-types";

function Notifications({ displayDrawer }) {
    return (
        <>
            <div className="menuItem">Your notifications</div>
            {displayDrawer ? 
                (<div className="Notifications">
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
            ) : (
                <div className="menuItem">
                    <p>Your notifications</p>
                </div>
            )};
        </>
    );
}

Notifications.PropTypes = {
    displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
    displayDrawer: false,
}

export default Notifications;