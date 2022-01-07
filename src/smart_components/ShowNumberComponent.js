import {connect} from "react-redux";

const ShowNumberComponent = function (props) {
    return (
        <div>
            <h1>{props.number}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        number: state.number
    };
};

export default connect(
    mapStateToProps,
    null)
(ShowNumberComponent);

