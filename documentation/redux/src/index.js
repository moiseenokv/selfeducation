import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducers from './reducers';
import { Provider } from 'react-redux';

const appStore =  createStore(
    rootReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
<Provider store={appStore}>
  <App />
</Provider>, 
document.getElementById('root'));
