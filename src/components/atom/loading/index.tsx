import { Box, keyframes, styled } from '@mui/material';
import React from 'react';

type Props = {
  variant?: 'default' | '';
};

const animationLine = keyframes`
  0% {
    height: 15px;
  }
  50% {
    height: 40px;
  }
  100% {
    height: 15px;
  }
`;

const CustomLine = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 2,

  '.line': {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    borderRadius: '15px',
    backgroundColor: theme.palette.primary.main,
  },

  '.line:nth-last-of-type(1)': {
    animation: animationLine + ' 1.5s 1.5s infinite',
  },
  '.line:nth-last-of-type(2)': {
    animation: animationLine + ' 1.5s 1s infinite',
  },
  '.line:nth-last-of-type(3)': {
    animation: animationLine + ' 1.5s 0.5s infinite',
  },
  '.line:nth-last-of-type(4)': {
    animation: animationLine + ' 1.5s 0s infinite',
  },
}));

export const Loading = ({ variant = 'default' }: Props) => {
  return (
    <Box
      height={1}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      gap={2}
    >
      <CustomLine>
        <div className='line' />
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </CustomLine>

      {/* <Typography fontSize={18} fontWeight={400} textAlign='center'>
        Đợi chút nha bồ. Chưa có tiền nâng cấp website 🙂🙂<br/>
        Mua hàng ik cho có chiền 😍😍     
      </Typography> */}
    </Box>
  );
};
