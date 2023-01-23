import React from 'react';
// Configura pra aplicação Web (Também é posivel mobile - Native)
import ReactDOM from 'react-dom/client';
// Importa o componente
import App from './App';

// Busca o elemento raiz do index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


