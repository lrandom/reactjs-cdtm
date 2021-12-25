import React from "react";
import  './Dropdown.css';

class Dropdown extends React.Component {
    constructor() {
        super();
        this.state={
            isOpen: false,
            activeItem:"Item 1"
        }
    }

    render() {
        return (

                <div className={"dropdown"}>
                    <div onClick={()=>{this.setState({isOpen:!this.state.isOpen})}}>{this.state.activeItem}</div>
                    {
                        this.state.isOpen ?
                            <ul>
                                <li onClick={()=>this.setState({activeItem:"Item 1"})}>Item 1</li>
                                <li onClick={()=>this.setState({activeItem:"Item 2"})}>Item 2</li>
                                <li onClick={()=>this.setState({activeItem:"Item 3"})}>Item 3</li>
                            </ul>
                            : null
                    }
                </div>
        );
    }
}

export default Dropdown;
