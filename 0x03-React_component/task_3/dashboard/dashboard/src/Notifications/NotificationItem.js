import React from "react";
import PropTypes from "prop-types"

function NotificationItem({type, html, value}) {
    return (
        <>
            {type && value ? (<li data-notification-type={type}>
                {value}
            </li>) : null}
            {html ? (<li dangerouslySetInnerHTML={{__html: html}}>{value}</li>) : null}
        </>
    );
}

NotificationItem.PropTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    __html: PropTypes.shape({
        html: PropTypes.string,
    }),
}

NotificationItem.PropTypes = {
    type: "default",
}

export default NotificationItem;