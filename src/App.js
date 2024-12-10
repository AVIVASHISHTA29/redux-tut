import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Child from './Child';
import { decrement, increment, incrementByX } from './redux/actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Counter : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByX(Math.floor(Math.random() * 100)))}>Increment by 100</button>
      <Child />
    </div>
  );
}

export default App;

// store.js - Global Storage - Single Source of Truth