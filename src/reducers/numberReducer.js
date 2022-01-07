export default function numberReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_NUMBER':
            return state + action.payload.step;

        case 'DECREMENT_NUMBER':
            return state - action.payload.step;
        default:
            return 0;
    }
};
