import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/App.jsx';
import './index.css';
import { store } from './redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <BrowserRouter basename='/final-comand-project-front-end'> */}
    <App />
    {/* </BrowserRouter> */}
  </Provider>
);
