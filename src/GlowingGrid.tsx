import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const GlowingGrid = () => {
  const [cells, setCells] = React.useState<
    Array<{ id: number; x: number; y: number; duration: number; delay: number }>
  >([]);

  React.useEffect(() => {
    const count = 15;
    const cols = Math.floor(window.innerWidth / 40);
    const rows = Math.floor(window.innerHeight / 40);
    const newCells = [];

    for (let i = 0; i < count; i++) {
      let x = 0;
      let y = 0;
      let attempts = 0;
      do {
        x = Math.floor(Math.random() * cols);
        y = Math.floor(Math.random() * rows);
        attempts++;
      } while (x > cols * 0.25 && x < cols * 0.75 && y > rows * 0.25 && y < rows * 0.75 && attempts < 20);

      newCells.push({
        id: i,
        x,
        y,
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 4,
      });
    }
    setCells(newCells);
  }, []);

  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {cells.map((cell) => (
        <Box
          key={cell.id}
          component={motion.div}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: cell.duration, repeat: Infinity, delay: cell.delay, ease: 'easeInOut' }}
          sx={(theme) => ({
            position: 'absolute',
            left: cell.x * 40 + 1,
            top: cell.y * 40 + 1,
            width: 39,
            height: 39,
            backgroundColor: theme.palette.primary.main,
            boxShadow: `0 0 10px ${theme.palette.primary.main}`,
          })}
        />
      ))}
    </Box>
  );
};

export default GlowingGrid;
