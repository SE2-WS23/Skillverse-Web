import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import UploadedFile from "./UploadedFile";


/**
 * @returns {JSX.Element} The Box holding all uploaded files in the Employee creation page component.
 */

function UploadBox() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSubmit = (event) => {
    console.log("File has been deleted");
    const files = event.target.files;
    const newFiles = Array.from(files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileUpload = (event) => {
    document.getElementById("upload-file").click();
  }

  return (
    <div>
      {selectedFiles.map((file) => (
    <Box key={file.name} display="flex" alignItems="center" mb={1}>
      <UploadedFile />
      <Typography variant="subtitle1" style={{ marginLeft: 8 }}>
      {file.name}
      </Typography>
    </Box>
    ))}
      <label htmlFor="upload-file">
        <input
          style={{ display: "none" }}
          id="upload-file"
          name="upload-file"
          type="file"
          multiple
          onChange={handleFileSubmit}
        />
        <Button color="primary" variant="contained" onClick={handleFileUpload}>
          Upload File
        </Button>
      </label>
    </div>
  );
}

export default UploadBox;
