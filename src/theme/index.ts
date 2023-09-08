import { createTheme as createMuiTheme } from '@mui/material';
import lightThemeOptions from './appearance/lightTheme';

export function createTheme() {
  const modeTheme = lightThemeOptions;

  return createMuiTheme({
    ...modeTheme,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
  });
}
