import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
  IconButton,
  useTheme,
  alpha,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import IconLogo from './IconLogo';
import { ColorModeContext } from './ColorModeContext';

const Navbar = () => {
  const navItems = ['Home', 'Expertise', 'Experience', 'Contact'];
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}
          >
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
          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '100%', sm: 300 },
            backgroundColor: alpha(theme.palette.background.default, 0.95),
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <Box sx={{ textAlign: 'center', py: 4, height: '100%', overflowY: 'auto' }}>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ mb: 2 }}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.toLowerCase())} sx={{ textAlign: 'center' }}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
