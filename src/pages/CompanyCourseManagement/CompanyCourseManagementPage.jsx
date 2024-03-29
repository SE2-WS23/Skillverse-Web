import { Button, Grid } from "@mui/material";
import PageLayout from "../../components/PageLayout";
import { v4 as uuidv4 } from "uuid";
import mockCourses from "./mockData";
import CourseListItem from "./components/CourseListItem";

/**
 * Renders the Company Course Management Page.
 * @returns {JSX.Element} The company course management page component.
 */
function CompanyCourseManagementPage() {
  const handleAddCourseClick = () => {
    console.log("Add Course button is clicked");
  };

  return (
    <PageLayout title="Company Course Management">
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          margin: "116px 0 0px 116px",
        }}
        onClick={handleAddCourseClick}
      >
        ADD COURSE
      </Button>

      <Grid
        container
        rowSpacing={6}
        columnSpacing={10}
        columns={16}
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        {mockCourses?.map((course) => (
          <CourseListItem
            key={uuidv4()}
            courseName={course.courseName}
            courseCategory={course.courseCategory}
            trainingNumber={course.trainingNumber}
          />
        ))}
      </Grid>
    </PageLayout>
  );
}

export default CompanyCourseManagementPage;
