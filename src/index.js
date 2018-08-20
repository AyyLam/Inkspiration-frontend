import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(thunk));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <BrowserRouter><Provider store={store}>
    <App />
    </Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
