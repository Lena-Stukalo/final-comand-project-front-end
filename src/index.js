import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter /*basename="/final-comand-project-front-end/"*/>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
