import React from "react";
import Tab from "./Tab";
import Content from "./Content";

class TabUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            tabData: [
                {
                    title: "Tab 1",
                    content: "content 1"
                },

                {
                    title: "Tab 2",
                    content: "content 2"
                }
            ]
        };
    }

    getActiveTabIndex(index) {
        this.setState({
            activeTabIndex: index
        });
    }

    render() {
        return (
            <div className={"tab-ui"}>
                <Tab
                    tabData={this.state.tabData}
                    activeTab={this.state.activeTabIndex}
                    sendActiveTabIndexToParent={this.getActiveTabIndex.bind(this)}
                />
                <Content
                    content={this.state.tabData[this.state.activeTabIndex].content}></Content>
            </div>
        )
    }

}

export default TabUI;
