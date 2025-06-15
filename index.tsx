
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Import ScrollToPlugin

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // Register ScrollToPlugin

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);