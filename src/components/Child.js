import React from "react";

class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>{this.props.name}{this.props.age}</div>)
    }
}

export default Child;
