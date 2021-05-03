import React, { FC, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import { AuthService, LoginDto } from '../shared/api/api';
import { useNavigate } from 'react-router-dom';
import { SvgIcon, makeStyles, dividerClasses } from '@material-ui/core';
import { ReactComponent as CompositionIcon } from '../assets/bg_composition.svg';
import { ReactComponent as FilesystemIcon } from '../assets/bg_filesystem.svg';
import { ReactComponent as WebDevIcon } from '../assets/bg_web_dev.svg';

const useStyles = makeStyles((theme) => {
  // console.dir(theme);
  return {
    root: {
      height: '100vh',
    },
    backgroundImage: {
      // backgroundImage: 'url(https://source.unsplash.com/random)',
      // backgroundRepeat: 'no-repeat',
      // backgroundColor: theme.palette.grey[50],
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      '& svg': {
        width: '25%',
        margin: '2rem',
        transition: '.2s',
      },
      '& svg:hover': {
        top: '-20%',
        transform: 'scale(1.3, 1.3)',
      },
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      fontSize: '200px',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  };
});

const BackgroundImage = () => {
  const classes = useStyles();

  return (
    <div className={classes.backgroundImage}>
      <FilesystemIcon />
      <WebDevIcon />
      <CompositionIcon />
    </div>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: LoginDto) => {
    AuthService.authControllerLogin({ body: data })
      .then((res) => {
        if (res?.statusCode === 200) {
          navigate('/app/dashboard', { replace: true });
          // TODO auth state
          // TODO user info store
          // TODO avatar image store
        }
      })
      .catch((err) => {
        if (err?.statusCode === 403) {
          // TODO toast it
          // password not correct
          console.log(err?.message);
        } else if (err?.statusCode === 400) {
          // TODO toast it
          // submitted message format error
          console.log(err?.message);
        } else {
          console.warn(err);
        }
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
        <BackgroundImage />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              {...register('email', { required: true })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('pwd', { required: true })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default Login;
