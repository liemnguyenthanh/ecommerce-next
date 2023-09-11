import { CardProduct } from '@/components/moducules';
import { IProduct } from '@/types/product';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { ProductDetailModal } from './ProductDetailModal';

type Props = {
  list: IProduct[];
};

export const ProductList = ({ list }: Props) => {
  const [idActive, setIdActive] = useState('');

  const onOpenProductModal = (id: string) => setIdActive(id);

  const onCloseProductModal = () => setIdActive('');

  const renderProducts = list.map((product) => (
    <Grid
      item
      xs={12}
      md={6}
      key={product.id}
      onClick={() => onOpenProductModal(product.id)}
    >
      <CardProduct product={product} />
    </Grid>
  ));

  return (
    <Box>
      <Grid container spacing={1.5}>
        {renderProducts}
      </Grid>
      <ProductDetailModal idProduct={idActive} onClose={onCloseProductModal} />
    </Box>
  );
};
