import React from "react";
import PropTypes from "prop-types"
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    default: {
      color: "blue",
      "@media (max-width: 375px)": {
        borderBottom: "1px solid black",
        listStyle: "none",
        fontSize: "20px",
        padding: "10px 8px",
      },
    },
    urgent: {
      color: "red",
      "@media (max-width: 375px)": {
        borderBottom: "1px solid black",
        listStyle: "none",
        fontSize: "20px",
        padding: "10px 8px",
      },
    },
  });

class NotificationItem extends React.Component {
    render ()
    {
        const {type, html, value, markAsRead, id} = this.props;
        return (
            <>
                {type && value ? (
                <li className={type === "default" ? css(styles.default) : css(styles.urgent)} onClick={() => markAsRead(id)} data-notification-type={type}>
                    {value}
                </li>) : null}
                {html ? (<li dangerouslySetInnerHTML={{__html: html}} onClick={() => markAsRead(id)} >{value}</li>) : null}
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