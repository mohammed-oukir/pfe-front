import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/page/HomePage';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material';

// import HomePage from './components/page/HomePage.jsx';
import LoginPage from './components/page/LoginPage.jsx';
import RegistrationChoicePage from './components/page/RegistrationChoicePage.jsx';

const theme = createTheme({
  //  direction: 'rtl',
   // other theme properties
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/hello",
    element: <h1>Hello</h1>,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/registry-choice",
    element: <RegistrationChoicePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
  </React.StrictMode>
)
