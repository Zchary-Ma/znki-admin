import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Chip, Box, ButtonGroup } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { dateDiff } from '../../shared/utils/format';
import { Link, useNavigate } from 'react-router-dom';
import { CreateDeckDto } from '../../shared/api/api';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    width: '300px',
    height: '200px',
    boxShadow: '9px 6px 13px 0px  rgba(34, 35, 58, 0.2)',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 4,
  },
  title: {},
  description: {},
  actions: {},
});

// TODO solution for implementation of FC prop from DTO and additional properties
const DeckCard: FC<{ [key: string]: any } & CreateDeckDto> = ({
  id = 0,
  // version = 0,
  // pid = -1,
  // conf = {},
  createAt = '2021-04-17T09:07:12.180Z',
  // updateAt = '2021-04-17T09:07:12.180Z',
  isPublic = false,
  name = 'placeholder',
  description = 'Bedfordshire tangible Refined',
}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dayCount = dateDiff(createAt, new Date(), 'day');

  const handleNavigate = (pathname: string, state) => {
    navigate(pathname, { state });
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
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
        {/* TODO ADD meaningful chip */}
        {/* <Chip
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
        /> */}
        <ButtonGroup>
          <IconButton
            onClick={() => handleNavigate('/app/card', { deckId: id })}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
        {/* <BottomNavigation>
          <BottomNavigationAction
            component={Link}
            to="/app/card"
            label="view"
            showLabel
            state={}
          />
        </BottomNavigation> */}
      </CardActions>
    </Card>
  );
};

export default DeckCard;
