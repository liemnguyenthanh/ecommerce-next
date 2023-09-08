import { IProduct } from '@/types/product';
import { Box, Typography } from '@mui/material';

type Props = {
  product: IProduct;
};

export const CardProduct = ({ product }: Props) => {
  return (
    <Box
      borderRadius={2}
      border={'1px solid #ccc'}
      sx={{ cursor: 'pointer', overflow: 'hidden' }}
    >
      <Box height={200}>
        <img
          src={product.image}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          alt=''
        />
      </Box>
      <Box p={1}>
        <Typography
          component='p'
          fontSize={16}
          fontWeight={600}
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
        >
          {product.title}
        </Typography>
      </Box>
    </Box>
  );
};
