import { createMuiTheme, colors } from '@material-ui/core';
import typography from './typography';

const theme = createMuiTheme({
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
