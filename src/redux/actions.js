export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
export const incrementByX = (payload) => ({ type: 'INCREMENT_BY_X', payload });
export const updateProfilePhoto = (profileUrl) => ({ type: 'SET_PROFILE_PHOTO', payload: profileUrl });