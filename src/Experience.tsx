import { Box, Container, Typography, Grid, Paper, Chip, useTheme, alpha } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BackgroundBlob from './BackgroundBlob';
import GlowingGrid from './GlowingGrid';
import MovingVertices from './MovingVertices';

const experiences = [
  {
    company: 'Tech Corp',
    role: 'Senior Software Engineer',
    date: '2022 - Present',
    description:
      'Leading the frontend team in building scalable web applications using React and TypeScript. Improved performance by 40% and mentored junior developers.',
    skills: ['React', 'Next.js', 'GraphQL', 'AWS'],
  },
  {
    company: 'Startup Inc',
    role: 'Software Developer',
    date: '2020 - 2022',
    description:
      'Developed and maintained multiple client-facing features. Collaborated with designers to implement pixel-perfect UIs and integrated third-party APIs.',
    skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Web Solutions',
    role: 'Junior Developer',
    date: '2018 - 2020',
    description:
      'Assisted in the development of e-commerce platforms. Wrote unit and integration tests to ensure code quality and reduced bug reports by 25%.',
    skills: ['JavaScript', 'React', 'CSS', 'Jest'],
  },
];

const Experience = ({ pattern }: { pattern: 'squares' | 'vertices' }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        py: 8,
        backgroundColor: 'background.default',
        backgroundImage: `radial-gradient(${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.15 : 0.35)} 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {isInView && (pattern === 'squares' ? <GlowingGrid /> : <MovingVertices />)}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              fontWeight: 800,
              color: 'text.primary',
              fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
              fontSize: { xs: '2rem', md: '3.5rem' },
              display: 'flex',
              alignItems: 'center',
              '&::before': {
                content: '"03."',
                color: 'primary.main',
                mr: 2,
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
              },
            }}
          >
            Where I've Worked
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: 'relative',
            borderLeft: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            ml: { xs: 2, md: 4 },
            pl: { xs: 3, md: 5 },
          }}
        >
          {experiences.map((exp, index) => (
            <Box
              component={motion.div}
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{ mb: 6, position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '-33px', md: '-49px' },
                  top: 0,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: 'background.default',
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              />
              <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 600, mb: 0.5 }}>
                {exp.role}{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  @ {exp.company}
                </Box>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                  mb: 2,
                  fontSize: '0.85rem',
                }}
              >
                {exp.date}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, maxWidth: '700px' }}>
                {exp.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {exp.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: 'primary.main',
                      fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                      fontSize: '0.75rem',
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
