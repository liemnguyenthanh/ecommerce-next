import { IProduct } from '@/types/product';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {
  product: IProduct;
};

export const CardProduct = ({ product }: Props) => {
  return (
    <Box
      borderRadius={2}
      border={1}
      borderColor='secondary.main'
      sx={{ cursor: 'pointer', overflow: 'hidden' }}
    >
      <Box
        height={200}
        sx={{ img: { width: '100%', height: '100%', objectFit: 'contain' } }}
      >
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
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
