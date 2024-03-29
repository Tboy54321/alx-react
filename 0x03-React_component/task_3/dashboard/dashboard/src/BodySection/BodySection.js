import React from "react"

class BodySection extends React.Component {
    render () {
        return (
            <div className="bodySection">
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}


BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default BodySection;