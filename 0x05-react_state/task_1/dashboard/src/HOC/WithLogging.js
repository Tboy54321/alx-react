import React from "react";

class WithLogging extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = this.getDisplayName(this.props.wrappedComponentName);
    }
    
    getDisplayName = (WrappedComponent) => {
        if (WrappedComponent) {
            return `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
        } else {
            return "WithLogging(Component)";
        }
    }
    
    componentDidMount() {
        console.log(`Component ${this.getDisplayName(WrappedComponent)} is mounted`)
    }

    componentWillUnmount() {
        console.log(`Component ${this.getDisplayName(WrappedComponent)} is going to unmount`)
    }

    render() {
        return (
            <WrappedComponent {...this.props} />
        )
    }
}