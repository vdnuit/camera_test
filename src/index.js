import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Vanilla from './Vanilla';
import Crop from './Crop';
import Webcam from './Webcam';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crop />
    {/* <Vanilla /> */}
    {/* <Webcam /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
