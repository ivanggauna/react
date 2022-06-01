import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import getFirestoreApp from './firebase/config';

getFirestoreApp()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
   <App/> 
  </React.StrictMode>
)
