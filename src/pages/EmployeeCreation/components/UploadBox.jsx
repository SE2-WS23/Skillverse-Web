import React from 'react';
import { Button, Box } from '@mui/material';
import UploadedFile from './UploadedFile';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function UploadBox(props) {
  UploadBox.propTypes = {
    selectedFiles: PropTypes.array,
    setSelectedFiles: PropTypes.func,
  };

  const { selectedFiles: parentSelectedFiles, setSelectedFiles } = props;

  const handleFileSubmit = (event) => {
    const files = event.target.files;
    const newFiles = Array.from(files);

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    console.log({ selectedFiles: parentSelectedFiles });
  };

  const handleFileUpload = () => {
    document.getElementById('upload-file').click();
  };

  const handleFileDelete = (fileNameToDelete) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileNameToDelete)
    );
  };

  return (
    <Box>
      {parentSelectedFiles.map((file) => (
        <Box key={uuidv4()} display='flex' alignItems='center' mb={1}>
          <UploadedFile fileName={file.name} onDelete={handleFileDelete} />
        </Box>
      ))}
      <label htmlFor='upload-file'>
        <input
          style={{ display: 'none' }}
          id='upload-file'
          name='upload-file'
          type='file'
          multiple
          onChange={handleFileSubmit}
        />
        <Button color='primary' variant='contained' onClick={handleFileUpload}>
          Upload File
        </Button>
      </label>
    </Box>
  );
}
UploadBox.defaultProps = {
  selectedFiles: [],
  setSelectedFiles: () => {},
};

export default UploadBox;
