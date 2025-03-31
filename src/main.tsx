import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

// Add this to fix JSON imports if needed
declare global {
  interface ImportMeta {
    url: string;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
