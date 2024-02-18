// Import the necessary actions from the redux actions file
import {
  decrement,
  increment,
  reset,
} from "./redux/actions";

// Import the useSelector and useDispatch hooks from react-redux
import { useSelector, useDispatch} from 'react-redux';

// Define the App component
function App() {
  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Use the useSelector hook to get the current value of the counter from the state
  const counter = useSelector(state => state.counter);

  // Return the JSX for the component
  return (
      <div style={{ textAlign: 'center'}}>
        <h1>
          Hello World <br /> Counter App using Redux. YaaY!
        </h1>
        <h1>Counter</h1>
        <h1>{counter}</h1>
        {/* Dispatch the increment action when the Increase button is clicked */}
        <button onClick={() => dispatch(increment())}>Increase (+)</button>
        {/* Dispatch the decrement action when the Decrease button is clicked */}
        <button onClick={() => dispatch(decrement())}>Decrease (-)</button>
        {/* Dispatch the reset action when the Reset button is clicked */}
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    );
}

// Export the App component as the default export
export default App;