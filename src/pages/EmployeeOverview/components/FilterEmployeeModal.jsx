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

/* The code block is defining constants and an object that are used for styling the dropdown menus in
the `FilterEmployeeModal` component. */
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

/**
 * A modal component for filtering employees by job title and course name.
 * @param {Object} props - The props object.
 * @param {Array} props.employees - An array of employee objects.
 * @param {boolean} props.open - A boolean indicating whether the modal is open or not.
 * @param {Function} props.handleClose - A function to handle closing the modal.
 * @returns {JSX.Element} - A JSX element representing the FilterEmployeeModal component.
 */
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

  /**
   * The function `handleJobTitleChange` takes an event object and updates the selected job titles based
   * on the value of the event target.
   */
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
  /**
   * The function `handleCourseChange` takes an event object and updates the `selectedCourse` state based
   * on the value of the event target.
   */

  const handleCourseChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCourse(typeof value === "string" ? value.split(",") : value);
  };

  function applyFilter() {
    props.handleClose({
      jobTitles: selectedJobTitle || [],
      courses: selectedCourse || [],
    });
  }

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Filter your Employees</DialogTitle>
      <DialogContent>
        <DialogContentText>Filter by Job Titles</DialogContentText>
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
        </FormControl>
        <DialogContentText>Filter by Course Name</DialogContentText>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="course-name-select-label">Courses</InputLabel>
          <Select
            labelId="course-name-select-label"
            id="course-name-select"
            multiple
            value={selectedCourse}
            onChange={handleCourseChange}
            input={<OutlinedInput label="CourseName" />}
            MenuProps={MenuProps}
          >
            {uniqueCourseNamesArray.map((courseName) => (
              <MenuItem
                key={courseName}
                value={courseName}
                style={getStyles(selectedCourse, courseName, theme)}
              >
                {courseName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={applyFilter}>Apply Filter</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FilterEmployeeModal;
