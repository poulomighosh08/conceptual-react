import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { FilterProvider } from './context/FilterContext';
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <FilterProvider>
   <Provider store={store}>
  <App />
  </Provider>
</FilterProvider>
  </StrictMode>
);