const initialState = {
    email: "",
    phone: "",
    profilePhoto: "",
    name: "",
    profileLoading: false,
    profileError: null,
    profileData: null,
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