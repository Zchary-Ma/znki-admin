import { Grid } from '@material-ui/core';
import React from 'react';
import Uploader from '../components/Uploader/Uploader';

interface Props {}

export const DemoPage = (props: Props) => {
  return (
    <Grid>
      <Uploader />
    </Grid>
  );
};
