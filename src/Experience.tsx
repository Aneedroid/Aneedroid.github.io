import { Box, Container, Typography, Chip, useTheme, alpha, ButtonBase, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import MovingVertices from './MovingVertices';

const experiences = [
  {
    company: 'Sagent',
    role: 'Principal Software Development Engineer',
    date: 'Apr 2024 - Present',
    description:
      'Championed successful collaborations between engineering teams across multiple projects. Designed scalable architecture for applications and architected reusable code libraries, reducing time-to-market by 50%. Mentored junior engineers to strengthen technical skills.',
    skills: ['System Design', 'Architecture', 'Leadership', 'Mentoring'],
  },
  {
    company: 'Sagent',
    role: 'Senior Software Development Engineer',
    date: 'Apr 2023 - Mar 2024',
    description:
      'Championed refactoring efforts for legacy codebase, improving maintainability and adoption by 50%. Designed user-friendly interfaces and influenced architectural decisions. Led code reviews reducing bugs before deployment by 76%.',
    skills: ['Refactoring', 'UI/UX', 'Code Review', 'React'],
  },
  {
    company: 'Mr. Cooper',
    role: 'Senior Software Engineer',
    date: 'Jul 2020 - Apr 2023',
    description:
      'Developed scalable applications using agile methodologies. Collaborated with management on application design status. Enhanced software functionality by resolving complex technical issues and offering constructive feedback on peer code.',
    skills: ['Agile', 'Scalability', 'Problem Solving', 'Teamwork'],
  },
  {
    company: 'Mr. Cooper',
    role: 'Software Development Engineer',
    date: 'Jun 2017 - Jun 2020',
    description:
      'Contributed to enterprise-level Web starter kits reducing project kickstart time. Built Node-based interactive CLI. Partnered with product management to translate requirements into technical specifications. Developed real-time document preview features.',
    skills: ['Node.js', 'CLI', 'JavaScript', 'Optimization'],
  },
];

const Experience = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const timelineContainerRef = useRef(null);
  // Animate timeline when its container is 10% in view from either direction
  const isTimelineInView = useInView(timelineContainerRef, { once: false, amount: 0.1 });

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
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>{isInView && <MovingVertices />}</Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 6, md: 8 },
              fontWeight: 800,
              color: 'text.primary',
              fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
              fontSize: { xs: '2rem', md: '3.5rem' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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

        <Box sx={{ position: 'relative' }} ref={timelineContainerRef}>
          <Box
            component={motion.div}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isTimelineInView ? 1 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            sx={{
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              top: 0,
              bottom: 0,
              width: 2,
              background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
              transformOrigin: 'top',
              ml: { xs: 0, md: '-1px' },
              boxShadow: `0 0 8px ${alpha(theme.palette.primary.main, 0.4)}`,
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              component={motion.div}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              sx={{
                position: 'relative',
                mb: 6,
                width: { xs: '100%', md: '50%' },
                ml: { xs: 0, md: index % 2 !== 0 ? 'auto' : 0 },
                mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                pl: { xs: 6, md: index % 2 !== 0 ? 6 : 0 },
                pr: { xs: 0, md: index % 2 === 0 ? 6 : 0 },
                textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
              }}
            >
              <ButtonBase
                component={motion.div}
                initial={{ backgroundColor: theme.palette.background.default, scale: 0.8 }}
                whileInView={{ scale: 1 }}
                variants={{
                  hover: {
                    scale: 1.2,
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
                whileTap={{ scale: 0.9, backgroundColor: theme.palette.primary.main }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                sx={{
                  position: 'absolute',
                  left: { xs: 12, md: index % 2 !== 0 ? -9 : 'auto' },
                  right: { xs: 'auto', md: index % 2 === 0 ? -9 : 'auto' },
                  top: 5,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  border: `2px solid ${theme.palette.primary.main}`,
                  zIndex: 1,
                  boxShadow: `0 0 0 4px ${theme.palette.background.default}`,
                  overflow: 'hidden',
                }}
              />
              <Paper
                elevation={0}
                component={motion.div}
                variants={{
                  hover: {
                    y: -5,
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 10px 30px -15px ${alpha(theme.palette.primary.main, 0.25)}`,
                  },
                }}
                transition={{ duration: 0.3 }}
                sx={{
                  p: 3,
                  backgroundColor: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  borderRadius: 2,
                  textAlign: 'inherit',
                }}
              >
                <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 600, mb: 0.5 }}>
                  {exp.role}{' '}
                  <Box component="span" sx={{ color: 'primary.main', display: 'block', fontSize: '0.8em' }}>
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
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  {exp.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                  }}
                >
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
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
