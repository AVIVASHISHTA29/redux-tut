export const setUsername = (username) => ({
    type: 'SET_USERNAME',
    payload: username,
});

export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users,
});

export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message,
});
