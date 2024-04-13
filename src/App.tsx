import React from 'react';
import TasksDashboard from './tasks/components/TasksDashboard';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { amber, green, lightBlue, red } from '@mui/material/colors';
import Api from './services/api/api';
import config from './config/config';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: red,
    warning: amber,
    info: lightBlue,
    success: green
  },
});

//Initialize single instance of Api connector to backend
Api.initialize(config.apiUrl);

function App() {
  return (
    <ThemeProvider theme={theme}>
        <TasksDashboard />
    </ThemeProvider>
  );
}

export default App;
