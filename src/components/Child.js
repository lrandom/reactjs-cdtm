import React from "react";

class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {this.props.name}{this.props.age}
 c          <button onClick={()=>{this.props.sendDataToParent("I am child")}}>Send Data To Parent</button>
        </div>)
    }
}

export default Child;
