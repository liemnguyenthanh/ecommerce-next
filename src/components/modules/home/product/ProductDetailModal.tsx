import { CustomModal } from '@/components/atom';
import { Box, Grid } from '@mui/material';

type Props = {
  idProduct?: string;
  onClose: () => void;
};

export const ProductDetailModal = ({ idProduct, onClose }: Props) => {
  const isOpenModal = !!idProduct;

  return (
    <CustomModal open={isOpenModal} onClose={onClose}>
      <Box height={1}>
        <Grid container spacing={2} height={1}>
          <Grid item md={6} height={1}>
            <Box borderRadius={3} bgcolor={'#00000020'} p={2} height={1}>
              Detail product: {idProduct}
            </Box>
          </Grid>
          <Grid item md={6}>
            reviewers
          </Grid>
        </Grid>
      </Box>
    </CustomModal>
  );
};
