import { Box, Paper, Typography, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypewriterLine = ({ text, delay, color = 'text.secondary' }: { text: string; delay: number; color?: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Typing speed

    return () => clearInterval(interval);
  }, [startTyping, text]);

  return (
    <Typography
      variant="body2"
      sx={{
        fontFamily: '"Fira Code", "Roboto Mono", monospace',
        color: color,
        lineHeight: 1.6,
        minHeight: '1.6em',
        whiteSpace: 'pre-wrap',
        fontSize: { xs: '0.8rem', sm: '0.9rem' },
      }}
    >
      {displayedText}
    </Typography>
  );
};

const HeroTerminal = () => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      sx={{
        width: '100%',
        maxWidth: 500,
        mx: 'auto',
        perspective: '1000px',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          bgcolor: alpha(theme.palette.background.paper, 0.6),
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          overflow: 'hidden',
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.2)}`,
          transform: 'rotateY(-5deg) rotateX(5deg)',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'rotateY(0deg) rotateX(0deg)',
          },
        }}
      >
        {/* Terminal Header */}
        <Box
          sx={{
            px: 2,
            py: 1.5,
            bgcolor: alpha(theme.palette.background.default, 0.8),
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
          <Typography
            variant="caption"
            sx={{ ml: 2, color: 'text.disabled', fontFamily: '"Fira Code", monospace', opacity: 0.7 }}
          >
            aneerudh@portfolio: ~
          </Typography>
        </Box>

        {/* Terminal Body */}
        <Box sx={{ p: 3, minHeight: 320, fontFamily: '"Fira Code", monospace' }}>
          <TypewriterLine text="> const aneerudh = new Engineer();" delay={1000} color="text.primary" />
          <TypewriterLine text="> aneerudh.location = 'Earth';" delay={2500} />
          <TypewriterLine text="> aneerudh.skills = [" delay={3500} />
          <TypewriterLine text="    'React', 'TypeScript', 'Node.js'," delay={4000} color="primary.main" />
          <TypewriterLine text="    'Azure', 'System Design'" delay={5000} color="primary.main" />
          <TypewriterLine text="  ];" delay={6000} />
          <TypewriterLine text="> aneerudh.resume.open();" delay={7000} color="text.primary" />

          <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8.5 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'success.main',
                mt: 2,
                fontFamily: '"Fira Code", monospace',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
              }}
            >
              ✔ Resume loaded successfully...
            </Typography>
          </Box>

          <Box
            component={motion.div}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            sx={{
              display: 'inline-block',
              width: 10,
              height: 18,
              bgcolor: 'primary.main',
              mt: 1,
              verticalAlign: 'text-bottom',
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default HeroTerminal;
