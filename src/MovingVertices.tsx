import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const VertexParticle = ({ bounds }: { bounds: { cols: number; rows: number } }) => {
  const [pos, setPos] = React.useState(() => {
    let c, r;
    let attempts = 0;
    do {
      c = Math.floor(Math.random() * bounds.cols);
      r = Math.floor(Math.random() * bounds.rows);
      attempts++;
    } while (
      c > bounds.cols * 0.2 &&
      c < bounds.cols * 0.8 &&
      r > bounds.rows * 0.2 &&
      r < bounds.rows * 0.8 &&
      attempts < 20
    );
    return { c, r };
  });

  const handleComplete = () => {
    const moves = [
      { dc: 0, dr: -1 },
      { dc: 0, dr: 1 },
      { dc: -1, dr: 0 },
      { dc: 1, dr: 0 },
    ];

    const validMoves = moves.filter(({ dc, dr }) => {
      const nc = pos.c + dc;
      const nr = pos.r + dr;
      if (nc < 0 || nc >= bounds.cols || nr < 0 || nr >= bounds.rows) return false;
      if (nc > bounds.cols * 0.2 && nc < bounds.cols * 0.8 && nr > bounds.rows * 0.2 && nr < bounds.rows * 0.8)
        return false;
      return true;
    });

    if (validMoves.length > 0) {
      const move = validMoves[Math.floor(Math.random() * validMoves.length)];
      setPos({ c: pos.c + move.dc, r: pos.r + move.dr });
    } else {
      setPos({ c: Math.floor(Math.random() * bounds.cols), r: Math.floor(Math.random() * bounds.rows) });
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ left: pos.c * 40 - 2, top: pos.r * 40 - 2, opacity: 0 }}
      animate={{ left: pos.c * 40 - 2, top: pos.r * 40 - 2, opacity: 1 }}
      transition={{ duration: 2 + Math.random(), ease: 'linear' }}
      onAnimationComplete={handleComplete}
      sx={(theme) => ({
        position: 'absolute',
        width: 5,
        height: 5,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        boxShadow: `0 0 5px ${theme.palette.primary.main}, 0 0 10px ${theme.palette.primary.main}`,
      })}
    />
  );
};

const MovingVertices = () => {
  const [bounds, setBounds] = React.useState<{ cols: number; rows: number }>({ cols: 0, rows: 0 });

  React.useEffect(() => {
    const updateBounds = () =>
      setBounds({ cols: Math.floor(window.innerWidth / 40), rows: Math.floor(window.innerHeight / 40) });
    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {bounds.cols > 0 && [...Array(20)].map((_, i) => <VertexParticle key={i} bounds={bounds} />)}
    </Box>
  );
};

export default MovingVertices;
