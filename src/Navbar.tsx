import { AppBar, Toolbar, Button, Container, Box, Typography, IconButton, useTheme, alpha } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import IconLogo from './IconLogo';
import { ColorModeContext } from './ColorModeContext';

const Navbar = () => {
  const navItems = ['Home', 'Expertise', 'Experience', 'Contact'];
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(12px)',
        backgroundColor: alpha(theme.palette.background.default, 0.85),
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.05)}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            <IconLogo />
            <Box component="span" sx={{ ml: 1 }}>
              Aneedroid.
            </Box>
            <Box component="span" sx={{ color: 'text.primary' }}>
              _
            </Box>
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                sx={{
                  color: 'text.primary',
                  ml: 2,
                  fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                  fontSize: '13px',
                  transition: 'all 0.25s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Box component="span" sx={{ color: 'primary.main', mr: 0.5 }}>
                  0{index + 1}.
                </Box>
                {item}
              </Button>
            ))}
            <IconButton sx={{ ml: 2 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
