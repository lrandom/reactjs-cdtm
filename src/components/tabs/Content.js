import React from "react";
import './Tab.css';
class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-content">
                {this.props.content}
            </div>
        );
    }
}

export default Content;
