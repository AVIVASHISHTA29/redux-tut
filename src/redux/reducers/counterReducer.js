const initialState = {
    count: 0,
    numberOfClicks: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1, numberOfClicks: state.numberOfClicks + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1, numberOfClicks: state.numberOfClicks + 1 };
        case 'INCREMENT_BY_X':
            return { ...state, count: state.count + action.payload, numberOfClicks: state.numberOfClicks + 1 };
        default:
            return state;
    }
};

export default counterReducer;