import { ThemeProvider, CssBaseline, Box, createTheme } from '@mui/material';
import React from 'react';
import { clarity } from 'react-microsoft-clarity';
import Navbar from './Navbar';
import Home from './Home';
import { ColorModeContext } from './ColorModeContext';
import SideSocials from './SideSocials';

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  React.useEffect(() => {
    const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID;
    if (clarityId) {
      clarity.init(clarityId);
    }
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#64ffda' : '#0056b3',
          },
          background: {
            default: mode === 'dark' ? '#0a192f' : '#f0f4f8',
            paper: mode === 'dark' ? '#112240' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#ccd6f6' : '#1a202c',
            secondary: mode === 'dark' ? '#8892b0' : '#4a5568',
          },
        },
        typography: {
          fontFamily: '"Inter", "sans-serif"',
          h1: { fontFamily: '"Inter", "sans-serif"' },
          h2: { fontFamily: '"Inter", "sans-serif"' },
          h3: { fontFamily: '"Inter", "sans-serif"' },
          h4: { fontFamily: '"Inter", "sans-serif"' },
          h5: { fontFamily: '"Inter", "sans-serif"' },
          h6: { fontFamily: '"Inter", "sans-serif"' },
          button: { fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace' },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <SideSocials />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Home />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
