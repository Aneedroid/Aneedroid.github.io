import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const ScrollIndicator = ({ onClick }: { onClick?: () => void }) => (
  <Box
    component={motion.div}
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 1,
    }}
    sx={{
      position: 'absolute',
      bottom: 32,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
      cursor: 'pointer',
    }}
  >
    <Box
      component={motion.div}
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
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
        animate={{ top: [8, 32], opacity: [1, 0] }}
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
