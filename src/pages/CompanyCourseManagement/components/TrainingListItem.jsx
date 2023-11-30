import React from "react";
import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

function TrainingListItem  ({ trainingNumber, backgroundColor })  {
    const theme = useTheme();

    return (
      
        <Grid
    
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
            width: "100%",
            height: "150px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
    
        }}
    
        >
    
            <Typography variant="h6" sx={{ color: theme.palette.common.white, textAlign: "center" }}>
        
                Training {trainingNumber}
        
            </Typography>
    
        </Grid>

    )
  
 };
  
  TrainingListItem.propTypes = {
    trainingNumber: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string,
  };
  
  TrainingListItem.defaultProps = {
    backgroundColor: "#2196F3",
  };

export default TrainingListItem;