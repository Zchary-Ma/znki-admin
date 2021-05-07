import { createMuiTheme, colors } from '@material-ui/core';
import typography from './typography';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: 'hsla(209, 52%, 51%, 1)',
      light: 'hsla(209, 52%, 61%, 1)',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
    },
  },
  typography,
});

export default theme;
