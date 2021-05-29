import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {
  createStyles,
  Theme,
  makeStyles,
  alpha,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 0,
    },
    title: {
      padding: theme.spacing(2),
      width: '256px',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      width: '280px',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputInput: {
      paddingLeft: theme.spacing(6),
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menu: {},
  }),
);
interface IMainNavbar {
  onMobileNavOpen: () => any;
}
const MainNavbar: FC<IMainNavbar> = ({ onMobileNavOpen, ...props }) => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} {...props}>
      <Toolbar>
        <Typography className={classes.title} variant="h3" noWrap>
          Znki
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            className={classes.inputInput}
            color="primary"
          />
        </div>
        <div className={classes.grow}></div>
        <div className={classes.menu}>
          <IconButton color="inherit">
            <PostAddIcon />
          </IconButton>
          <IconButton color="inherit">
            <PostAddIcon />
          </IconButton>
          <IconButton color="inherit">
            <PostAddIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
