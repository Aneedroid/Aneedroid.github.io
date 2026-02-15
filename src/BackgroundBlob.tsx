import { Box, BoxProps } from '@mui/material';
import { motion, AnimationProps, Transition } from 'framer-motion';
import React from 'react';

export interface BackgroundBlobProps {
  animate: AnimationProps['animate'];
  transition: Transition;
  sx: BoxProps['sx'];
  gradientColor: string;
  blur?: string;
}

const BackgroundBlob = ({ animate, transition, sx, gradientColor, blur = '80px' }: BackgroundBlobProps) => (
  <Box
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
    component={motion.div as any}
    animate={animate}
    transition={transition}
    sx={[
      {
        position: 'absolute',
        background: `radial-gradient(circle, ${gradientColor} 0%, rgba(0,0,0,0) 70%)`,
        borderRadius: '50%',
        filter: `blur(${blur})`,
        zIndex: -1,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  />
);

export default BackgroundBlob;
