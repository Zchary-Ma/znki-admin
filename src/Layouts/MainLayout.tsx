import React, { useState, FC } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MainNavbar from './MainNavbar';
import MainSidebar from './MainSidebar';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

const MainLayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256,
  },
}));

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const MainLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

const MainLayout: FC = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <MainLayoutRoot>
      <MainNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>
            <MainSidebar
              onMobileClose={() => setMobileNavOpen(false)}
              openMobile={isMobileNavOpen}
            />
            <Outlet />
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  );
};

export default MainLayout;
