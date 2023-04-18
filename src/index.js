import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    text: '#2a2a2a',
    background: '#e9edff',
    primary: '#2b3162',
    secondary: '#1a236a;',
    accent: '#9e0202',
    muted: '#dddff8',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
