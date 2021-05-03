import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Chip, Box } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { dateDiff } from '../../shared/utils/format';
import { Link } from 'react-router-dom';
import { CreateDeckDto } from '../../shared/api/api';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    paddingLeft: '.75rem',
    width: '300px',
    height: '200px',
    boxShadow: '9px 6px 13px 0px  rgba(34, 35, 58, 0.2)',
    borderRadius: 12,
  },
  title: {
    padding: '0.5rem 0 0.3rem',
  },
  description: {
    flexGrow: 1,
  },
  actions: {
    paddingBottom: '1rem',
    justifyContent: 'space-between',
    '& button': {
      flexShrink: 0,
    },
  },
  box: {
    '& *': {
      margin: '0.2rem',
    },
  },
});

// TODO solution for implementation of FC prop from DTO and additional properties
const DeckCard: FC<{ [key: string]: any } & CreateDeckDto> = ({
  id = 0,
  version = 0,
  pid = -1,
  conf = {},
  createAt = '2021-04-17T09:07:12.180Z',
  updateAt = '2021-04-17T09:07:12.180Z',
  isPublic = false,
  name = 'placeholder',
  description = 'Bedfordshire tangible Refined',
}) => {
  const classes = useStyles();
  const dayCount = dateDiff(createAt, new Date(), 'day');
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="overline" color="textSecondary" gutterBottom>
          {`Already in deck for ${dayCount} ${dayCount >= 2 ? 'days' : 'day'} `}
        </Typography>
        <Typography
          color="primary"
          className={classes.title}
          variant="h3"
          component="h2"
        >
          {name}
        </Typography>
        <Typography color="textSecondary" className={classes.description}>
          {description}
        </Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Box className={classes.box}>
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label={isPublic ? 'public' : 'private'}
            icon={<PublicIcon />}
          />
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label="placeholder"
            icon={<AssignmentTurnedInIcon />}
          />
        </Box>
        <BottomNavigation>
          <BottomNavigationAction
            component={Link}
            to="/app/card"
            label="view"
            showLabel
          />
        </BottomNavigation>
      </CardActions>
    </Card>
  );
};

export default DeckCard;
