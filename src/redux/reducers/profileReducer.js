const initialState = {
    email: "",
    phone: "",
    profilePhoto: "",
    name: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        default:
            return state;
    }
}

export default profileReducer;