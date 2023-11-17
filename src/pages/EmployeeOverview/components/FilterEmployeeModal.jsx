import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function FilterEmployeeModal(props) {
  const theme = useTheme();

  //Styling for the multiple select, to highlight the selected items
  function getStyles(array, item, theme) {
    return {
      fontWeight:
        array.indexOf(item) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const [selectedJobTitle, setSelectedJobTitle] = useState([]);

  const uniqueJobTitles = [
    ...new Set(props.employees.map((employee) => employee.jobTitle)),
  ];

  const handleJobTitleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedJobTitle(typeof value === "string" ? value.split(",") : value);
  };

  const [selectedCourse, setSelectedCourse] = useState([]);
  const uniqueCourseNamesArray = [
    ...new Set(
      props.employees.flatMap((employee) =>
        employee.courses.map((course) => course.name)
      )
    ),
  ];

  const handleCourseChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCourse(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Filter your Employees</DialogTitle>
      <DialogContent>
        <DialogContentText>Job Title</DialogContentText>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="job-title-select-label">Job Title</InputLabel>
          <Select
            labelId="job-title-select-label"
            id="job-title-select"
            multiple
            value={selectedJobTitle}
            onChange={handleJobTitleChange}
            input={<OutlinedInput label="JobTitle" />}
            MenuProps={MenuProps}
          >
            {uniqueJobTitles.map((jobTitle) => (
              <MenuItem
                key={jobTitle}
                value={jobTitle}
                style={getStyles(selectedJobTitle, jobTitle, theme)}
              >
                {jobTitle}
              </MenuItem>
            ))}
          </Select>
          <InputLabel id="course-name-select-label">Course Name</InputLabel>
          <Select
            labelId="course-name-select-label"
            id="course-name-select"
            multiple
            value={selectedCourse}
            onChange={handleCourseChange}
            input={<OutlinedInput label="JobTitle" />}
            MenuProps={MenuProps}
          >
            {uniqueCourseNamesArray.map((jobTitle) => (
              <MenuItem
                key={jobTitle}
                value={jobTitle}
                style={getStyles(selectedCourse, jobTitle, theme)}
              >
                {jobTitle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose()}>Apply Filter</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FilterEmployeeModal;
