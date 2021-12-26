import React from "react";
import {withRouter} from "react-router-dom";

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.match.params.id,
            name:this.props.match.params.name
        }
    }

    goToPage2(){
        this.props.history.replace("/page-2?id="+this.state.id+"&name"+this.state.name);
    }

    render() {
        return (<div>I am page 1
          Dư lieu lay duoc la id {this.state.id} va name {this.state.name}

          <button onClick={()=>{this.goToPage2()}}>Go to page 2</button>
        </div>)
    }
}

export default withRouter(Page1);
