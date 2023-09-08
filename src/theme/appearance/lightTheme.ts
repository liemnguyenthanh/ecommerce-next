import { ThemeOptions } from '@mui/material';
import { lightBlue, lightGreen, red, deepPurple } from '@mui/material/colors';

// Create a theme instance.
const lightThemeOptions: ThemeOptions = {
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
      default: deepPurple[500],
    },
  },
};

export default lightThemeOptions;
