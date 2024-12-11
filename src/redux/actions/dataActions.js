
export const fetchData = (postNumber) => {
    return async (dispatch) => {
        dispatch({ type: 'DATA_LOADING' });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`);
            const data = await response.json();
            dispatch({ type: 'DATA_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'DATA_ERROR', payload: error.message });
        }
    };
};