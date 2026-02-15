import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const ScrollIndicator = () => (
  <Box
    component={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 1, 0, 0] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      times: [0, 0.1, 0.4, 0.5, 1],
      delay: 2,
    }}
    sx={{
      position: 'absolute',
      bottom: 32,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
    }}
  >
    <Box
      sx={(theme) => ({
        width: 28,
        height: 48,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '16px',
        position: 'relative',
        boxShadow: `0 0 12px ${theme.palette.primary.main}`,
      })}
    >
      <Box
        component={motion.div}
        animate={{ top: [8, 28], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        sx={(theme) => ({
          position: 'absolute',
          left: '50%',
          width: 4,
          height: 8,
          borderRadius: '2px',
          backgroundColor: theme.palette.primary.main,
          transform: 'translateX(-50%)',
        })}
      />
    </Box>
  </Box>
);

export default ScrollIndicator;
