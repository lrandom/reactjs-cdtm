import React from "react";
import "./Tab.css";

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0
        };
    }

    render() {

        return (
            <div className="tab">
                {
                    this.props.tabData.map((item, index) => {
                        return (<div className={"tab-title " + (this.state.activeTabIndex == index ? "tab-active" : "")}
                                     key={index} onClick={() => {
                            this.setState({activeTabIndex: index});
                            this.props.sendActiveTabIndexToParent(index)
                        }}>
                            <div>
                                {item.title}
                            </div>
                        </div>)
                    })
                }
            </div>
        );
    }
}

export default Tab;
