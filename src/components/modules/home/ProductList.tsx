import { CardProduct } from '@/components/moducules';
import { IProduct } from '@/types/product';
import { Grid } from '@mui/material';

type Props = {
  list: IProduct[];
};

export const ProductList = ({ list }: Props) => {
  console.log(list);

  const renderProducts = list.map((product) => (
    <Grid item xs={12} md={6} key={product.id}>
      <CardProduct product={product} />
    </Grid>
  ));

  return (
    <Grid container spacing={1.5} overflow='scroll'>
      {renderProducts}
    </Grid>
  );
};
