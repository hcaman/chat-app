import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist/lib/types';
import './index.css';
import App from './App';
import store from './redux/store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const persistor: Persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
