import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import { searchRobots,requestRobots } from './reducers';
import 'tachyons'

const logger = createLogger();
const rootReducers = combineReducers({searchRobots,requestRobots})
const store = createStore( rootReducers,applyMiddleware(thunk,logger) )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
