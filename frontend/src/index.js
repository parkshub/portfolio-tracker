import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));


const theme = createTheme();

theme.typography.h1 = {
  fontSize: "2rem",
  "@media (max-width: 600px)": { // this is for when screen size is smaller than 600px
    fontSize: "5rem"
  }
}

theme.typography.myVariant = {
  fontSize: "10rem"
}

theme.palette.primary = {
  main: "green"
}


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
