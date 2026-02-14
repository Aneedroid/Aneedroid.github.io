import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: '200px', md: '400px' },
          height: { xs: '200px', md: '400px' },
          background: 'radial-gradient(circle, rgba(25, 118, 210, 0.15) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          zIndex: -1,
          filter: 'blur(60px)',
        }}
      />
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <Box component={motion.div} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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
        </Box>
        <Box component={motion.div} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Typography
            variant="h1"
            color="text.primary"
            sx={{ fontSize: { xs: '3rem', md: '5.5rem' }, fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Aneerudh.
          </Typography>
        </Box>
        <Box component={motion.div} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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
        </Box>
        <Box component={motion.div} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '600px', mb: 5, fontSize: '1.1rem', lineHeight: 1.6 }}
          >
            I bring ideas to life. Focused on building scalable and intuitive software.
          </Typography>
        </Box>
        <Box component={motion.div} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ py: 2, px: 4, fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace' }}
          >
            Check out my work
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
