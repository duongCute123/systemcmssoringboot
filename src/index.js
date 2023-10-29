import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RouterPage from './routerpage/RouterPage';
import { AuthenProvider } from './context/AuthenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenProvider>
      <RouterPage />
    </AuthenProvider>
  </React.StrictMode>
);

