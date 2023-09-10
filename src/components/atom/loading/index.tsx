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
    height: 35px;
  }
  100% {
    height: 15px;
  }
`;

const CustomLine = styled(Box)({
  '.line': {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    borderRadius: '15px',
    backgroundColor: '#4b9cdb',
  },

  '.line:nth-last-child(1)': {
    animation: animationLine + ' 1.5s 1s infinite',
  },
  '.line:nth-last-child(2)': {
    margin: '0 10px',
    animation: animationLine + ' 1.5s 0.5s infinite',
  },
  '.line:nth-last-child(3)': {
    animation: animationLine + ' 1.5s 0s infinite',
  },
});

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
      </CustomLine>

      {/* <Typography fontSize={18} fontWeight={400} textAlign='center'>
        Đợi chút nha bồ. Chưa có tiền nâng cấp website 🙂🙂<br/>
        Mua hàng ik cho có chiền 😍😍     
      </Typography> */}
    </Box>
  );
};
