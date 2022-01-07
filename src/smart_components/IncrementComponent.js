import {incrementNumber} from "../actions/actionNumber";
import {connect} from "react-redux";

const IncrementComponent = function (props) {
    const {incrementNumber} = props;
    const decrement = function () {
        incrementNumber(10);
    }

    return (
        <div>
            <button onClick={decrement}>+</button>
        </div>
    );
};

const mapDispatchToProps = function (dispatch) {
    return {
        incrementNumber: function (number) {
            dispatch(incrementNumber(number));
        }
    }
};

export default connect(null, mapDispatchToProps)(IncrementComponent);
