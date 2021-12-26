import React from "react";

class Page2 extends React.Component {
    constructor() {
        super();
        const queryString = window.location.search;//?id=1&name=Luan
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');//1
        const name = urlParams.get('name');//Luan
        this.state = {
            id: id,
            name: name
        }
    }

    render() {
        return (<div>I am page 2
            {this.state.id}
            {this.state.name}
        </div>)
    }
}

export default Page2;
