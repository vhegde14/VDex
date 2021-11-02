import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import keys from './keys';

import { MoralisProvider } from 'react-moralis';

const APP_ID = keys.APP_ID;
const SERVER_URL = keys.SERVER_URL;

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL} >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
