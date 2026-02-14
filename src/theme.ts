import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda', // Developer teal
    },
    background: {
      default: '#0a192f', // Deep navy
      paper: '#112240', // Lighter navy for cards
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif',
    h1: { fontWeight: 700, color: '#ccd6f6' },
    h2: { fontWeight: 600, color: '#ccd6f6' },
    h3: { fontWeight: 600, color: '#ccd6f6' },
    h4: { fontWeight: 600, color: '#ccd6f6' },
    h5: { fontWeight: 600, color: '#ccd6f6' },
    h6: { fontWeight: 600, color: '#ccd6f6' },
    body1: { color: '#8892b0' },
    body2: { color: '#8892b0' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#495670 #0a192f',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#0a192f',
            width: '12px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#495670',
            minHeight: 24,
            border: '3px solid #0a192f',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#6d7d9c',
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#6d7d9c',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#6d7d9c',
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#0a192f',
          },
        },
        '::selection': {
          backgroundColor: '#233554',
          color: '#64ffda',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
