import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import ToggleButton  from "@mui/material/ToggleButton";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Stack from "@mui/material/Stack";
import PageLayout from "../../components/PageLayout";
import * as React  from "react";
import "./DescribeTheJob.css"
/**
* Renders the DescribeTheJob page.
* @returns {JSX.Element} DescribeTheJobPage component
*/





function DescribeTheJob(){
  const [selected, setSelected] = React.useState(()=> [0]);
  const handleChange =  ( event, newSelected) => {
    setSelected(newSelected);

  };
  
  
    return( 
<PageLayout viewportPage title="DescribeTheJob">
  <h2>Select relevant Skills for the job</h2>
<Box 
 sx={{
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   height: "calc(100% - 60px)",
  }}
>
  <Box 
  sx={{
    
    
    
    height: "90%",
    width: "80%",
    backgroundColor: "#D9D9D9", 
    alignItems: "center"
    
  }}
  
  >
    


<Stack className="grid-container" alignItems="center">

<ToggleButtonGroup 
value={selected}
onChange={handleChange}
aria-label="text formatting">
<ToggleButton value="true1"  aria-label="true1"> tag </ToggleButton>
<ToggleButton value="true2"  aria-label="true2"> tag </ToggleButton>
<ToggleButton value="true3"  aria-label="true3"> tag </ToggleButton>
<ToggleButton value="true4"  aria-label="true4"> tag </ToggleButton>
<ToggleButton value="true5"  aria-label="true5"> tag </ToggleButton>
<ToggleButton value="true6"  aria-label="true6"> tag </ToggleButton>

</ToggleButtonGroup>
<ToggleButtonGroup 
value={selected}
onChange={handleChange}
aria-label="text formatting">
<ToggleButton value="true7"  aria-label="true7"> tag </ToggleButton>
<ToggleButton value="true8"  aria-label="true8"> tag </ToggleButton>
<ToggleButton value="true9"  aria-label="true9"> tag </ToggleButton>
<ToggleButton value="true10" aria-label="true10" > tag </ToggleButton>
<ToggleButton value="true11" aria-label="true11" > tag </ToggleButton>
<ToggleButton value="true12" aria-label="true12" > tag </ToggleButton>

</ToggleButtonGroup>
<ToggleButtonGroup 
value={selected}
onChange={handleChange}
aria-label="text formatting">

<ToggleButton value="true13" aria-label="true13" > tag </ToggleButton>
<ToggleButton value="true14" aria-label="true14" > tag </ToggleButton>
<ToggleButton value="true15" aria-label="true15" > tag </ToggleButton>
<ToggleButton value="true16" aria-label="true16" > tag </ToggleButton>
<ToggleButton value="true17" aria-label="true17" > tag </ToggleButton>
<ToggleButton value="true18" aria-label="true18" > tag </ToggleButton>
</ToggleButtonGroup>

  </Stack>






  </Box>



</Box>
<Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        Save changes
      </Button>




</PageLayout>
);

}
export default DescribeTheJob;