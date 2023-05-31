/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { throttle } from 'app/utils/throttle';
// import { saveState } from 'app/utils/persistState';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import { ThemeProvider } from 'app/components/ThemeProvider';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(MOUNT_NODE);

/* Persistence */
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
/* store.subscribe(
  throttle(() => {
    saveState({
      theme: store.getState().theme,
    });
  }, 1000),
); */
/* End Persistence */

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <DndProvider backend={HTML5Backend}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </DndProvider>
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// accessibility checking in browser console
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
