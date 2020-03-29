import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec }from './actions';
import { mult } from './actions/clicker';


function App() {
  const counter = useSelector(state=>state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const clicker = useSelector(state => state.clickerReducer);

  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Counter {counter}</h1>
     <h3>Clicker {clicker}</h3>
     <button onClick= {() => dispatch(inc())}>inc</button>
     <button onClick= {() => dispatch(dec())}>dec</button>
     <button onClick= {() => dispatch(mult())}>mult</button>
     {isLogged ? <h3>Valuable Information I shouldn`t see</h3> : ''}
    </div>
  );
}

export default App;
