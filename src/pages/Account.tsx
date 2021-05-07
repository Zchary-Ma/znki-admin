import React, { FC } from 'react';
import { Box, Container, Typography } from '@material-ui/core';

const Account: FC = (props) => (
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h1">
          Todo Account page
        </Typography>
      </Container>
    </Box>
  </>
);

Account.propTypes = {
  // bla: PropTypes.string,
};

Account.defaultProps = {
  // bla: 'test',
};

export default Account;
