import { Box, Grid, Skeleton } from '@mui/material';
import React, { Fragment } from 'react';
import { FilterProducts } from './FilterProducts';
import { ProductList } from './ProductList';
import { useGetProducts } from '@/hooks/products/useGetProducts';

export const Products = () => {
  const [{ data, loading: isLoading }] = useGetProducts();

  const renderSkeleton = Array.from({ length: 4 }, (_, index) => (
    <Grid item xs={6} key={index}>
      <Skeleton />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation={false} />
    </Grid>
  ));

  return (
    <Box display='flex' flexDirection='column' height={1}>
      <FilterProducts />
      <Box mt={2} flex={1} overflow='scroll'>
        {isLoading ? (
          <Grid container spacing={1.5}>
            {renderSkeleton}
          </Grid>
        ) : (
          <ProductList list={data} />
        )}
      </Box>
    </Box>
  );
};
