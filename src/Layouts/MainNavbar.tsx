import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

const MainNavbar: FC = (props) => (
  <AppBar elevation={0} {...props}>
    <Toolbar>
      <RouterLink to="/"></RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
