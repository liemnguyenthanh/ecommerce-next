import { ThemeOptions } from '@mui/material';
import { lightBlue, lightGreen, red } from '@mui/material/colors';

// Create a theme instance.
const darkThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: lightBlue[200],
    },
    secondary: {
      main: lightGreen[200],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
    },
  },
};

export default darkThemeOptions;
