const initialState = {
    data: null,
    loading: false,
    error: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DATA_LOADING":
            return { ...state, loading: true, data: null, error: null };
        case "DATA_SUCCESS":
            return { ...state, loading: false, data: action.payload, error: null };
        case "DATA_ERROR":
            return { ...state, loading: false, data: null, error: action.payload };
        default:
            return state;
    }
};

export default dataReducer;
