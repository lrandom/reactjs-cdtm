import {decrementNumber} from "../actions/actionNumber";
import {connect} from "react-redux";

const DecrementComponent = function (props) {
    const {decrementNumber} = props;
    const decrement = function () {
        decrementNumber(10);
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
        </div>
    );
};

const mapDispatchToProps = function (dispatch) {
    return {
        decrementNumber: function (number) {
            dispatch(decrementNumber(number));
        }
    }
};

export default connect(null, mapDispatchToProps)(DecrementComponent);
