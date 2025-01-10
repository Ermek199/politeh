import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

// Создайте экземпляр Styletron
const engine = new Styletron();

// Используйте ReactDOM.createRoot для рендеринга компонента
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyletronProvider value={engine}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyletronProvider>
);

// Для измерения производительности (опционально)
reportWebVitals();
