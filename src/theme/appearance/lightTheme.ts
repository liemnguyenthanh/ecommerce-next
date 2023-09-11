import { ThemeOptions } from '@mui/material';
import { lightBlue, lightGreen, red } from '@mui/material/colors';

// Create a theme instance.
const lightThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ccc',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f6f8',
    },
  },
};

export default lightThemeOptions;
