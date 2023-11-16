//imports
import { Button, MenuItem, Select, FormGroup, Stack, Box } from "@mui/material";
import "./style.css"
import React from "react";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types'

export default function FileActionItem({files}) {

    const theme = useTheme()

    const [file, setFile] = React.useState(files[0]);
    const [action, setAction] = React.useState('view');

    const handleFileChange = (event) => {
      setFile(event.target.value);
    };
    const handleActionChange = (event) => {
        setAction(event.target.value);
      };

      const handleGoBtn = () => {
        console.log("NotImplemented file: "+file)
      };

      //populates files selection with prop array
      function populateSelect(_files){
        return _files.map(el => {
            return (<MenuItem value={el} key={_files.indexOf(el)}>{el}</MenuItem>)
        })
      }

    return (
        <Box className="component" sx={{backgroundColor: theme.palette.primary.light}}>

            <FormGroup className="form-control">
                        <Stack spacing={2} direction="row">
                            <Select fullWidth onChange={handleFileChange} value={file}>
                                {populateSelect(files)}
                            </Select>
                            <Select fullWidth onChange={handleActionChange} value={action}>
                                <MenuItem value={"view"}>View</MenuItem>
                                <MenuItem value={"dload"}>Download</MenuItem>
                            </Select>
                            <Button variant="contained" onClick={handleGoBtn}>GO</Button>
                        </Stack>
            </FormGroup>

        </Box>
    );
}

FileActionItem.propTypes={
  files: PropTypes.array
}