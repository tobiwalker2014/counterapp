// Import the counterReducer from the reducers file
import counterReducer from "./reducers/counterReducer"

// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Create a Redux store using the configureStore function
// The reducer for the store is set to the counterReducer
const store = configureStore({
  reducer: counterReducer
});

// Export the store as the default export
export default store;