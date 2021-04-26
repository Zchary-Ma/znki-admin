import React, { FC } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  makeStyles,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from 'react-hook-form';
import { AuthService, LoginDto } from '../shared/api/api';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  paper: {
    padding: 20,
    height: '80vh',
    margin: '2rem auto',
    width: '400px',
  },
  btn: {
    margin: '0.75rem 0',
  },
  avatar: {
    backgroundColor: '#1bbd7e',
    margin: 'auto',
  },
});

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (data: LoginDto) => {
    AuthService.authControllerLogin({ body: data }).then((res) => {
      if (res?.data?.statusCode === 200) {
        // TODO auth state
        // navigate('/');
      } else {
        if (res?.data?.statusCode === 400) {
          // TODO toast it
          // submitted message format error
          console.log(res?.data?.message);
        } else if (res?.data?.statusCode === 403) {
          // TODO toast it
          // password not correct
          console.log(res?.data?.message);
        } else {
          console.warn(res);
        }
      }
    });
  };

  return (
    <Paper
      elevation={10}
      className={classes.paper}
      sx={{
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          sx={{
            margin: '2rem 0',
          }}
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ textAlign: 'center' }} variant="h2">
            Sign In
          </Typography>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter email"
          fullWidth
          required
          style={{
            marginBottom: '1rem',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          {...register('email')}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
          {...register('pwd', { required: true })}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btn}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {' '}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </form>
    </Paper>
  );
};

export default Login;
