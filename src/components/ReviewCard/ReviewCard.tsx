import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import { CardService, EnumReviewCardDtoStatus } from '../../shared/api/api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 12,
      width: 400,
      height: 540,
      textAlign: 'center',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      textAlign: 'center',
      spacing: 10,
    },
    content: {
      textAlign: 'center',
      spacing: 10,
      flexGrow: 1,
      cursor: 'pointer',
    },
    button: {
      margin: theme.spacing(1),
    },
    action: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    hide: {
      opacity: 1,
    },
    none: {
      display: 'none',
    },
  }),
);

export default function ReviewCard({
  title = 'Card title',
  content = 'Card Content',
  id = -1,
  count = 0,
}) {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [reviewed, setReviewed] = useState(false);

  const toggleOverlay = (val) => {
    setClicked(!val);
  };
  const handleSubmit = (id, status) => {
    setReviewed(true);
    CardService.cardControllerReviewCard({
      body: {
        cardId: id,
        status,
      },
    }).then((res) => {
      if (res.message === 'success') {
        // notify
      }
    });
  };

  return (
    <Card className={clsx([reviewed && classes.none, classes.root])}>
      <CardHeader title={title} className={classes.header} />
      <Divider variant="middle" />
      <CardContent
        className={classes.content}
        onClick={() => toggleOverlay(clicked)}
      >
        {clicked ? (
          <Typography variant="h4" align="center">
            {content}
          </Typography>
        ) : null}
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleSubmit(id, EnumReviewCardDtoStatus.CLEAR)}
        >
          Easy
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleSubmit(id, EnumReviewCardDtoStatus.GOOD)}
        >
          Good
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleSubmit(id, EnumReviewCardDtoStatus.UNKNOWN)}
        >
          Unknown
        </Button>
      </CardActions>
    </Card>
  );
}
