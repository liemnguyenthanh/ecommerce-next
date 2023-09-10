import { Box, Grid, Skeleton } from '@mui/material';
import React, { Fragment } from 'react';
import { FilterProducts } from './FilterProducts';
import { ProductList } from './ProductList';
import { useGetProducts } from '@/hooks/products/useGetProducts';
import { Loading } from '@/components/atom';

export const Products = () => {
  const [{ data, loading: isLoading }] = useGetProducts();

  return (
    <Box display='flex' flexDirection='column' height={1}>
      <FilterProducts />
      <Box mt={2} flex={1} overflow='hidden scroll'>
        {isLoading ? <Loading /> : <ProductList list={data} />}
      </Box>
    </Box>
  );
};
