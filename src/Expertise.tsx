import { Box, Container, Typography, Grid, Paper, Chip, useTheme, alpha } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BackgroundBlob from './BackgroundBlob';
import MovingVertices from './MovingVertices';

const skills = [
  {
    title: 'Frontend',
    description: 'Crafting responsive, performant, and accessible user interfaces using modern React ecosystems.',
    skills: ['React', 'Redux', 'Svelte', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'UI/UX Design'],
  },
  {
    title: 'Backend',
    description: 'Architecting robust server-side solutions, RESTful & GraphQL APIs, and managing database schemas.',
    skills: ['NodeJs', 'Java', 'GraphQL', 'Spring Boot', 'System Design', 'Software Architecture', 'REST APIs'],
  },
  {
    title: 'Tools & DevOps',
    description:
      'Streamlining development lifecycles with CI/CD pipelines, containerization, and cloud infrastructure.',
    skills: ['Git', 'CLI Tools', 'Vite', 'Webpack', 'Optimization', 'Algorithms'],
  },
  {
    title: 'Game Dev & R&D',
    description: 'Exploring emerging technologies, building 3D experiences, and contributing to open source.',
    skills: ['Unity', 'AR/VR', 'Open Source', 'Prototyping', 'Research'],
  },
  {
    title: 'Gen AI',
    description: 'Leveraging LLMs and generative models to build intelligent features and automated workflows.',
    skills: ['Prompt Engineering', 'RAG'],
  },
];

const Expertise = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        py: { xs: 4, md: 2 },
        backgroundColor: 'background.default',
        backgroundImage: `radial-gradient(${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.15 : 0.35)} 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        overflow: 'hidden',
      }}
    >
      <BackgroundBlob
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: '400px', md: '700px' },
          height: { xs: '400px', md: '700px' },
          zIndex: 0,
          pointerEvents: 'none',
        }}
        gradientColor={alpha(theme.palette.primary.main, 0.4)}
      />
      <BackgroundBlob
        animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: '400px', md: '700px' },
          height: { xs: '400px', md: '700px' },
          zIndex: 0,
          pointerEvents: 'none',
        }}
        gradientColor="rgba(25, 118, 210, 0.4)"
      />
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>{isInView && <MovingVertices />}</Box>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              fontWeight: 800,
              color: 'text.primary',
              fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
              fontSize: { xs: '2rem', md: '3.5rem' },
              display: 'flex',
              alignItems: 'center',
              '&::before': {
                content: '"02."',
                color: 'primary.main',
                mr: 2,
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
              },
            }}
          >
            Expertise
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {skills.map((category, index) => (
            <Grid item xs={12} md={[4, 4, 4, 6, 6][index] || 4} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 10px 30px -15px ${alpha(theme.palette.primary.main, 0.25)}`,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      color: 'primary.main',
                      fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                      fontWeight: 600,
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.6 }}>
                    {category.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          color: 'text.secondary',
                          border: '1px solid transparent',
                          fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                          fontSize: '0.85rem',
                          '&:hover': {
                            color: 'primary.main',
                            borderColor: 'primary.main',
                            backgroundColor: alpha(theme.palette.primary.main, 0.2),
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Expertise;
