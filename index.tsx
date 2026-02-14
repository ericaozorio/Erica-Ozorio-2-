import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importação do CSS para garantir que o build processe os estilos

const rootId = 'erica-ozorio-portfolio';
const rootElement = document.getElementById(rootId);

if (!rootElement) {
  console.error(`Elemento com id '${rootId}' não encontrado. Certifique-se de usar o shortcode [portfolio_aura] no WordPress.`);
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}