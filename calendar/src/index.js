import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { CalendarSaveProvider } from './Contexts/CalendarSaveProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalendarSaveProvider>
      <App />
    </CalendarSaveProvider>
  </React.StrictMode>
);
