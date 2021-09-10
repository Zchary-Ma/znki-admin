import React, { FC, useState } from 'react';
import { Box } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Counter from '../components/Counter';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    totalView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
  }),
);

const Dashboard: FC = (props) => {
  const classes = useStyles();

  const [data, setData] = useState([
    {
      name: 'Total Cards',
      count: 100,
      icon: <PersonIcon color="disabled" style={{ fontSize: '56px' }} />,
    },
    {
      name: 'Total Cards',
      count: 100,
      icon: <PersonIcon color="disabled" style={{ fontSize: '56px' }} />,
    },
    {
      name: 'Total Cards',
      count: 100,
      icon: <PersonIcon color="disabled" style={{ fontSize: '56px' }} />,
    },
  ]);

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <section className={classes.totalView}></section>
    </Box>
  );
};

export default Dashboard;
