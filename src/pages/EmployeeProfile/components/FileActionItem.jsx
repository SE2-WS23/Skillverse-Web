import { Button, MenuItem, Select, FormGroup, Stack, Box } from "@mui/material";
import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

/**
 *renders FileAction component of employee profile
 * @returns {JSX.Element} FileAction item for employee profile page component
 */

export default function FileActionItem(props) {
  const [file, setFile] = React.useState(props.files[0]);
  const [action, setAction] = React.useState("view");

  const handleFileChange = (event) => {
    setFile(event.target.value);
  };
  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleGoBtn = () => {
    console.log("NotImplemented file: " + file);
  };

  //populates files selection with prop array
  function populateSelect(_files) {
    return _files?.map((el) => {
      return (
        <MenuItem value={el} key={uuid()}>
          {el}
        </MenuItem>
      );
    });
  }

  return (
    <Box className="form-component">
      <FormGroup className="form-control">
        <Stack spacing={2} direction="row">
          <Select fullWidth onChange={handleFileChange} value={file}>
            {populateSelect(props.files)}
          </Select>
          <Select fullWidth onChange={handleActionChange} value={action}>
            <MenuItem value={"view"}>View</MenuItem>
            <MenuItem value={"dload"}>Download</MenuItem>
          </Select>
          <Button variant="contained" onClick={handleGoBtn}>
            GO
          </Button>
        </Stack>
      </FormGroup>
    </Box>
  );
}

FileActionItem.propTypes = {
  files: PropTypes.array,
};
