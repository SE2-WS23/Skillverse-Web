import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

function NavBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title || "Page Title"}
          </Typography>

          {props.barItems?.map((item) => (
            <React.Fragment key={uuidv4()}>{item}</React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  barItems: PropTypes.arrayOf(PropTypes.element),
};

export default NavBar;
