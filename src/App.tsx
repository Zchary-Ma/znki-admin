import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/themes';
import routes from './routes';
import { CookiesProvider } from 'react-cookie';
import { useAuth } from './shared/hooks';

function App(): JSX.Element {
  // TODO
  // const { isLoggedIn } = useSelector((state) => state.auth);
  const auth = useAuth();
  const isLoggedIn = auth;
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <GlobalStyles />
        {routing}
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
