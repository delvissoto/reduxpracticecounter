import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';  // import from the redux store state managment. 
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* The Provider allows for the all the app to access the store.   */}
    <App />
    </Provider>
  </React.StrictMode>
);

