const initialState = {
    count: 0,
    profilePhoto: null,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'INCREMENT_BY_X':
            return { ...state, count: state.count + action.payload };
        case 'SET_PROFILE_PHOTO':
            return { ...state, profilePhoto: action.payload };
        default:
            return state;
    }
};

export default counterReducer;