import React, { useEffect, FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Book as BookIcon,
  HelpCircle as HelpCircleIcon,
} from 'react-feather';
import NavItem from './NavItem';

interface ISidebar {
  onMobileClose: () => any;
  openMobile: boolean;
}

// TODO load user info in localStorage
const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
};

const items = [
  {
    href: '/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },
  {
    href: '/deck',
    icon: BookIcon,
    title: 'Deck',
  },
  {
    href: '/about',
    icon: HelpCircleIcon,
    title: 'About',
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error',
  },
];

const MainSidebar: FC<ISidebar> = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64,
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={true}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)',
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default MainSidebar;
