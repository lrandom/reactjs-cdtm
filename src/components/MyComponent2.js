import React from "react";

class MyComponent2 extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowDiv: false,
            isShowSpan: false,
            name: 'Luan'
        }
        console.log("init Component");


        //this.setState({isShowDiv: true});
        setTimeout(() => {
            this.setState({isShowDiv: true, name: 'Nguyen Thanh Luan'});
        }, 3000);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillMount() {
        console.log("Component Will Mount");
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    //đây là phuơng thức được gọi để tạo giao diện
    render() {
        return (
            <div>
                This is component 2
            </div>
        );
    }
}

export default MyComponent2;
