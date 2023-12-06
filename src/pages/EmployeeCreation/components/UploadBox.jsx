import React, { useState } from 'react';
import { Button, Box, Input } from '@mui/material';
import UploadedFile from './UploadedFile';
import { v4 as uuidv4 } from 'uuid';

/**
 * @returns {JSX.Element} The Box holding all uploaded files in the Employee creation page component.
 */

function UploadBox() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSubmit = (event) => {
    const files = event.target.files;
    const newFiles = Array.from(files);

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    console.log({ selectedFiles });
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
      {selectedFiles.map((file) => (
        <Box key={uuidv4()} display='flex' alignItems='center' mb={1}>
          <UploadedFile fileName={file.name} onDelete={handleFileDelete} />
        </Box>
      ))}
      <label htmlFor='upload-file'>
        <Input
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

export default UploadBox;
