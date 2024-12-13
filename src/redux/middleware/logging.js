// middleware/logger.js
const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Previous State:', store.getState());
    console.log('Dispatching:', action);
    const result = next(action); // Pass action to the next middleware/reducer
    console.log('Next State:', store.getState());
    return result; // Return the result of next middleware/reducer
};

export default loggerMiddleware;


