import { Container } from '@/components/atom';
import { ProductsTopPage } from '@/components/modules';
import { Box, Grid } from '@mui/material';
import React from 'react';

export const HomePage = () => {
  return (
    <Box bgcolor='background.default' height='100dvh' py={2}>
      <Container height={1}>
        <Grid container spacing={2} height={1}>
          <Grid item xs={12} md={6} height={1}>
            <Box
              height={1}
              bgcolor='primary.light'
              borderRadius={2}
              p={2}
              boxShadow={'-3px 3px 6px 6px #00000001'}
            >
              <ProductsTopPage />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            Chat Section
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
