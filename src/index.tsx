import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import defaulttheme from './styles/theme/defaulttheme';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaulttheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

