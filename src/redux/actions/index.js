// Define the increment action creator function
export const increment = () => {
    // Return an action with the type "INCREMENT"
    return {
      type: "INCREMENT",
    };
};

// Define the decrement action creator function
export const decrement = () => {
    // Return an action with the type "DECREMENT"
    return {
      type: "DECREMENT",
    };
};

// Define the reset action creator function
export const reset = () => {
    // Return an action with the type "RESET"
    return {
      type: "RESET",
    };
};