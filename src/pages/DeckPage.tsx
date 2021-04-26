import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import DeckCard from '../components/DeckCard';
import { DeckService } from '../shared/api/api';

const DeckPage: FC = (props) => {
  const [state, setState] = useState({
    deckItems: [],
  });
  useEffect(() => {
    DeckService.deckControllerGetDecks({ take: 20, skip: 0 }).then((res) => {
      if (res?.data?.message === 'success') {
        setState({ deckItems: res.data.data });
      }
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Grid
      // container direction="row" justify="center" spacing={1}
      >
        {state.deckItems &&
          state.deckItems.map((item, index) => (
            <Grid item key={index}>
              <DeckCard {...item}></DeckCard>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default DeckPage;
