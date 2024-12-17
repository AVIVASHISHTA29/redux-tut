const initialState = {
    messages: [],
    users: [],
    username: '',
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload };
        case 'SET_USERS':
            return { ...state, users: action.payload };
        case 'ADD_MESSAGE':
            return { ...state, messages: [...state.messages, action.payload] };
        default:
            return state;
    }
};

export default chatReducer;