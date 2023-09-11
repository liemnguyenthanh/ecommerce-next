import { Loading } from '@/components/atom';
import { useGetProducts } from '@/hooks/products/useGetProducts';
import { Box } from '@mui/material';
import { Fragment } from 'react';
import { FilterProducts } from './FilterProducts';
import { ProductList } from './ProductList';

export const Products = () => {
  const [{ data, loading: isLoading }] = useGetProducts();

  return (
    <Fragment>
      <Box display='flex' flexDirection='column' height={1}>
        <FilterProducts />
        <Box mt={2} flex={1} overflow='hidden scroll'>
          {isLoading ? <Loading /> : <ProductList list={data} />}
        </Box>
      </Box>
    </Fragment>
  );
};
