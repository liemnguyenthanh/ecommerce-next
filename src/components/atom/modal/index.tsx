import {
  Box,
  Fade,
  IconButton,
  Modal,
  ModalProps,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = ModalProps & {
  onClose: () => void;
};

const innerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 1200,
  p: 2,
  outline: 'none',
  height: 'calc(100dvh - 200px)',
  bgcolor: 'background.default',
  borderRadius: 3,
};
œ;
const iconCloseStyle = {
  position: 'absolute',
  top: 10,
  right: 0,
  bgcolor: '#848586',
  borderBottomLeftRadius: '50%',
  borderTopLeftRadius: '50%',
  color: '#fff',
};

export const CustomModal = (props: Props) => {
  const { open, children, onClose } = props;

  return (
    <Modal {...props} sx={{ p: 2 }} onClose={onClose}>
      <Fade in={open} timeout={500}>
        <Box sx={{ ...innerStyle }}>
          <Box sx={{ ...iconCloseStyle }}>
            <IconButton size='large' onClick={onClose} color='inherit'>
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};
