import React, { FC, useEffect, useState } from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import DeckCard from '../components/DeckCard';
import { DeckService } from '../shared/api/api';

const DeckPage: FC = (props) => {
  const [state, setState] = useState({
    deckItems: [],
  });
  useEffect(() => {
    DeckService.deckControllerGetDecks({ take: 20, skip: 0 }).then((res) => {
      if (res?.message === 'success') {
        setState({ deckItems: res.data });
      }
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        padding: 2,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {state.deckItems &&
            state.deckItems.map((item, index) => (
              <Grid item key={index}>
                <DeckCard {...item}></DeckCard>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DeckPage;
