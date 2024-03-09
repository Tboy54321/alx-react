import React from "react";
import PropTypes from "prop-types"

class NotificationItem extends React.Component {
    render ()
    {
        const {type, html, value} = this.props;
        return (
            <>
                {type && value ? (<li data-notification-type={type}>
                    {value}
                </li>) : null}
                {html ? (<li dangerouslySetInnerHTML={{__html: html}}>{value}</li>) : null}
            </>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    __html: PropTypes.shape({
        html: PropTypes.string,
    }),
}

NotificationItem.propTypes = {
    type: "default",
}

export default NotificationItem;