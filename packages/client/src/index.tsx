import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AnimatedCursor from 'react-animated-cursor';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color="255, 46, 99"
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={5}
      outerStyle={{
        mixBlendMode: 'exclusion',
        zIndex: 2000,
      }}
    />
    <App />
  </>,
);
