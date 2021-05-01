import React from 'react';
import { Button, Box, ButtonBase, Typography } from '@material-ui/core';
import { CommonService } from '../../../shared/api/api';

const Uploader = () => {
  const inputEl = React.useRef<HTMLInputElement>(null);

  const onFileUpload = (event: any) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    CommonService.commonControllerUpload({ file })
      .then((res) => {
        if (res.message === 'success') {
          console.log('success');
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return (
    <Box>
      <Typography>Upload</Typography>
      <input
        accept="image/*"
        id="outlined-button-file"
        multiple
        type="file"
        ref={inputEl}
        onChange={onFileUpload}
      />
    </Box>
  );
};

Uploader.defaultProps = {
  // bla: 'test',
};

export default Uploader;
