import { Box, GlobalStyles } from '@mui/material';
import Hero from './Hero';
import Expertise from './Expertise';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
  return (
    <Box>
      <GlobalStyles
        styles={{
          html: { scrollSnapType: 'y mandatory', scrollBehavior: 'smooth', scrollbarWidth: 'none' },
          body: { scrollbarWidth: 'none' },
          'html::-webkit-scrollbar': { display: 'none' },
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Box id="home" sx={{ scrollSnapAlign: 'start' }}>
          <Hero />
        </Box>
        <Box id="expertise" component="section" sx={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}>
          <Expertise />
        </Box>
        <Box id="experience" component="section" sx={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}>
          <Experience />
        </Box>
        <Box id="contact" component="section" sx={{ scrollSnapAlign: 'start', scrollMarginTop: '80px' }}>
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
