import React, { FC } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewCardList from '../components/ReviewCard';

const Review: FC = (props) => (
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        padding: 2,
      }}
    >
      <ReviewCardList />
    </Box>
  </>
);

export default Review;
