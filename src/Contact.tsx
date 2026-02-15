import { Box, Container, Typography, Button, useTheme, alpha } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BackgroundBlob from './BackgroundBlob';
import GlowingGrid from './GlowingGrid';
import MovingVertices from './MovingVertices';
import Footer from './Footer';

const Contact = ({ pattern }: { pattern: 'squares' | 'vertices' }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        pt: 8,
        backgroundColor: 'background.default',
        backgroundImage: `radial-gradient(${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.15 : 0.35)} 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        overflow: 'hidden',
      }}
    >
      <BackgroundBlob
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        sx={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: { xs: '300px', md: '600px' },
          height: { xs: '300px', md: '600px' },
          zIndex: 0,
          pointerEvents: 'none',
        }}
        gradientColor={alpha(theme.palette.primary.main, 0.3)}
      />

      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {isInView && (pattern === 'squares' ? <GlowingGrid /> : <MovingVertices />)}
      </Box>

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'primary.main',
              fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
              mb: 2,
            }}
          >
            04. What's Next?
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, color: 'text.primary', mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 6, fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px', mx: 'auto' }}
          >
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </Typography>
          <Button
            variant="outlined"
            size="large"
            href="mailto:your.email@example.com"
            sx={{
              py: 2,
              px: 5,
              fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
              fontSize: '1rem',
              color: 'primary.main',
              borderColor: 'primary.main',
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
          >
            Say Hello
          </Button>
        </motion.div>
      </Container>
      <Footer />
    </Box>
  );
};

export default Contact;
