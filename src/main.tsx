import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
const container = document.getElementById('root') ?? document.createElement('div');

const clientId = "875169943419-tda7slse5a16qb65mfktffgtrbj565i1.apps.googleusercontent.com";
if (!clientId) {
  console.error("Error: Invalid client ID");
} else {
  ReactDOM.createRoot(container).render(
    <GoogleOAuthProvider clientId={clientId}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}
