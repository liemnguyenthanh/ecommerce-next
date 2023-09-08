import { Box, BoxProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & BoxProps;

export const Container = ({ children, ...prop }: Props) => {
  return (
    <Box maxWidth={1200} width={1} margin={'0 auto'} p={'0 20px'} {...prop}>
      {children}
    </Box>
  );
};
