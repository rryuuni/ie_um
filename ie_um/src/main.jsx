import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
import GlobalStyle from './styles/GlobalStyle.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
   </ThemeProvider>,
);
