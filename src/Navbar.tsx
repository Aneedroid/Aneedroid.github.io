import { AppBar, Toolbar, Button, Container, Box, Typography } from '@mui/material';
import IconLogo from './IconLogo';

const Navbar = () => {
  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
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
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {navItems.map((item, index) => (
              <Button
                key={item}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
