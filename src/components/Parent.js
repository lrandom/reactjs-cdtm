import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    constructor() {
        super();
    }


    getDataFromChild(val) {
        alert(val);
    }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                <Child sendDataToParent={this.getDataFromChild} name={"Nguyen Nam"} age={"20"}></Child>
            </div>
        );
    }
}

export default Parent;
