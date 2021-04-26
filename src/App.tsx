import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/themes';
import routes from './routes';

function App(): JSX.Element {
  // TODO
  // const { isLoggedIn } = useSelector((state) => state.auth);
  const isLoggedIn = true;
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
}

export default App;
