import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                <Child name={"Nguyen Nam"} age={"20"}></Child>
            </div>
        );
    }
}

export default Parent;
