import React from "react";
import BodySection from "./BodySection";

class BodySectionWithMarginBottom extends React.Component {
    render () {
        return (
            <div className="BodySectionWithMarginBottom">
                <BodySection {...this.props} />
            </div>
        )
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    childern: PropTypes.string.isRequired,
}

export default BodySectionWithMarginBottom;