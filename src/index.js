import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyContextProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <p>
    <React.StrictMode>
   <BrowserRouter><MyContextProvider><App /></MyContextProvider></BrowserRouter>
    </React.StrictMode>
  </p>
);