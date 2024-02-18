// Define the initial state of the counter
const initialState = {
    counter: 0
}

// Define the counter reducer function
const counterReducer = (state = initialState, action) => {
    // Use a switch statement to handle different action types
    switch (action.type) {
      // If the action type is "INCREMENT"
      case "INCREMENT":
        return {
          // Return a new state with the counter incremented by 1
          ...state,
          counter: state.counter + 1
        };
      // If the action type is "DECREMENT"
      case "DECREMENT":
        return {
          // Return a new state with the counter decremented by 1
          ...state,
          counter: state.counter - 1
        };
      // If the action type is "RESET"
      case "RESET":
        return {
          // Return a new state with the counter reset to 0
          ...state,
          counter: 0
        };
      // If the action type doesn't match any cases
      default:
        // Return the current state
        return state;
    }
  };

  // Export the counterReducer as the default export
  export default counterReducer;