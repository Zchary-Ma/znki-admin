import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
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
        height: '100%',
      }}
    >
      {state.deckItems &&
        state.deckItems.map((item, index) => (
          <DeckCard key={index} {...item}></DeckCard>
        ))}
    </Box>
  );
};

export default DeckPage;
