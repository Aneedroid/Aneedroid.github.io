import { Box, Typography, Button, Container, BoxProps, alpha } from '@mui/material';
import { motion, AnimationProps, Transition, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import BackgroundBlob, { BackgroundBlobProps } from './BackgroundBlob';
import ScrollIndicator from './ScrollIndicator';
import GlowingGrid from './GlowingGrid';
import MovingVertices from './MovingVertices';

const blobData: BackgroundBlobProps[] = [
  {
    animate: { x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] },
    transition: { duration: 20, repeat: Infinity, repeatType: 'reverse' },
    sx: {
      top: '-20%',
      right: '-10%',
      width: { xs: '300px', md: '600px' },
      height: { xs: '300px', md: '600px' },
    },
    gradientColor: 'rgba(25, 118, 210, 0.2)',
  },
  {
    animate: { x: [0, -70, 0], y: [0, 100, 0], scale: [1, 1.1, 1] },
    transition: { duration: 25, repeat: Infinity, repeatType: 'reverse' },
    sx: {
      bottom: '-10%',
      left: '-10%',
      width: { xs: '300px', md: '600px' },
      height: { xs: '300px', md: '600px' },
    },
    gradientColor: 'rgba(156, 39, 176, 0.15)',
  },
  {
    animate: { x: [0, 50, 0], y: [0, 50, 0], opacity: [0.5, 0.8, 0.5] },
    transition: { duration: 15, repeat: Infinity, repeatType: 'reverse' },
    sx: {
      top: '40%',
      left: '20%',
      width: { xs: '200px', md: '400px' },
      height: { xs: '200px', md: '400px' },
    },
    gradientColor: 'rgba(0, 188, 212, 0.15)',
    blur: '60px',
  },
];

const contentContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const contentVariants: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const AnimatedContent = ({ children }: { children: React.ReactNode }) => (
  <Box component={motion.div} variants={contentVariants}>
    {children}
  </Box>
);

const Hero = ({ pattern }: { pattern: 'squares' | 'vertices' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <Box
      ref={ref}
      sx={(theme) => ({
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'background.default',
        backgroundImage: `radial-gradient(circle at 50% 50%, transparent 20%, ${theme.palette.background.default} 100%), linear-gradient(${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.1 : 0.2)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.1 : 0.2)} 1px, transparent 1px)`,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
      })}
    >
      {blobData.map((blob, index) => (
        <BackgroundBlob key={index} {...blob} />
      ))}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {isInView && (pattern === 'squares' ? <GlowingGrid /> : <MovingVertices />)}
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box component={motion.div} initial="hidden" animate="visible" variants={contentContainerVariants}>
          <AnimatedContent>
            <Typography
              variant="body1"
              sx={{
                color: 'primary.main',
                fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                mb: 2,
                ml: 0.5,
              }}
            >
              Hi, my name is
            </Typography>
          </AnimatedContent>
          <AnimatedContent>
            <Typography
              variant="h1"
              color="text.primary"
              sx={{ fontSize: { xs: '3rem', md: '5.5rem' }, fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Aneerudh.
            </Typography>
          </AnimatedContent>
          <AnimatedContent>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{ fontSize: { xs: '2rem', md: '4rem' }, mb: 4, fontWeight: 700 }}
            >
              I craft{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                digital experiences.
              </Box>
            </Typography>
          </AnimatedContent>
          <AnimatedContent>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '600px', mb: 5, fontSize: '1.1rem', lineHeight: 1.6 }}
            >
              I bring ideas to life. Focused on building scalable and intuitive software.
            </Typography>
          </AnimatedContent>
          <AnimatedContent>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ py: 2, px: 4, fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace' }}
            >
              Check out my work
            </Button>
          </AnimatedContent>
        </Box>
      </Container>
      <ScrollIndicator />
    </Box>
  );
};

export default Hero;
