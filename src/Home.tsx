import { Box, GlobalStyles, Button, useTheme } from '@mui/material';
import React from 'react';
import Hero from './Hero';
import Expertise from './Expertise';
import Experience from './Experience';
import Contact from './Contact';
import GlowingGrid from './GlowingGrid';
import MovingVertices from './MovingVertices';

const Home = () => {
  const theme = useTheme();
  const [pattern, setPattern] = React.useState<'squares' | 'vertices'>('squares');

  return (
    <Box>
      <GlobalStyles
        styles={{
          html: { scrollSnapType: 'y mandatory', scrollBehavior: 'smooth', scrollbarWidth: 'none' },
          body: { scrollbarWidth: 'none' },
          'html::-webkit-scrollbar': { display: 'none' },
        }}
      />

      <Box sx={{ position: 'fixed', bottom: 30, right: 30, zIndex: 10 }}>
        <Button
          onClick={() => setPattern((p) => (p === 'squares' ? 'vertices' : 'squares'))}
          variant="outlined"
          size="small"
          sx={{
            color: 'primary.main',
            borderColor: 'primary.main',
            backgroundColor: 'rgba(10, 25, 47, 0.8)',
            backdropFilter: 'blur(4px)',
            '&:hover': { backgroundColor: 'rgba(10, 25, 47, 0.9)', borderColor: 'primary.light' },
          }}
        >
          Switch Pattern
        </Button>
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Box id="home" sx={{ scrollSnapAlign: 'start' }}>
          <Hero pattern={pattern} />
        </Box>
        <Box id="expertise" component="section" sx={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}>
          <Expertise pattern={pattern} />
        </Box>
        <Box id="experience" component="section" sx={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}>
          <Experience pattern={pattern} />
        </Box>
        <Box id="contact" component="section" sx={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}>
          <Contact pattern={pattern} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
