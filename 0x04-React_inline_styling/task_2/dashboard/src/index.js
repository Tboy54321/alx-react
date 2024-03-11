import React from 'react';
import ReactDOM from 'react-dom/client';
// import Notifications from './Notifications'
import App from './App/App';
import './Notifications/Notifications.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);