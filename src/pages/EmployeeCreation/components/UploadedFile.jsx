import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { InsertDriveFile } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types'


/**
 * @returns {JSX.Element} The File Component for Employee creation page to display uploaded Files.
 */
function UploadedFile({ fileName }) {

    const deleteFile = (event) => {
        console.log("File has been deleted");
      };

  return (
    
    <Box display="flex" alignItems="center" flexDirection="row" mb={1}>
        <InsertDriveFile fontSize="small" style={{ marginRight: 8 }} />
            <Typography variant="subtitle1">Selected File: {fileName}</Typography>
        <IconButton aria-label="delete" onClick={deleteFile} sx={{alignItems:"right"}} >
            <DeleteIcon />
        </IconButton>
        
    </Box>
    
  );
}

UploadedFile.propTypes = {
    fileName: PropTypes.string.isRequired,
};

export default UploadedFile;
