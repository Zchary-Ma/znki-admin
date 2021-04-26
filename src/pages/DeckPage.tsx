import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
const DeckPage: FC = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
    }}
  >
    DeckPage
  </Box>
);

DeckPage.propTypes = {
  // bla: PropTypes.string,
};

DeckPage.defaultProps = {
  // bla: 'test',
};

export default DeckPage;
