import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';
import Child from './Child';
import { decrement, increment, incrementByX } from './redux/actions/counterActions';

function App() {
  const { count, numberOfClicks } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter : {count}</h1>
      <h1> Number of Clicks : {numberOfClicks}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByX(Math.floor(Math.random() * 100)))}>Increment by 100</button>
      <Child />
      <Link to="/profile">
        <div>Go to Profile</div>
      </Link>
    </div>
  );
}

export default App;

// store.js - Global Storage - Single Source of Truth