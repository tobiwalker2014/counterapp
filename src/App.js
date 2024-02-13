import {
  decrement,
  increment,
  reset,
} from "./redux/actions";
import { useSelector, useDispatch} from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter) 


  return (
      <div style={{ textAlign: 'center'}}>
        <h1>
          Hello World <br /> Counter App using Redux. YaaY!
        </h1>
        <h1>Counter</h1>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>-</button>
      </div>
    );
}


export default App;