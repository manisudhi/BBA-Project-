import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/style.css';

const root = document.getElementById('root');

const tree = (
  <React.StrictMode>
    <BrowserRouter basename="/BBA-Project-">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered pages ship with markup already in #root, so hydrate those
// and fall back to a fresh render during `vite dev`.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
