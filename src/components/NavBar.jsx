import MenuIcon from "@mui/icons-material/Menu";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { ListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/**
 * A navigation bar component that includes a drawer menu.
 * @param {Object} props - The props object.
 * @param {string} [props.title="Page Title"] - The title of the page.
 * @param {Array} [props.barItems=[]] - An array of React components to be rendered in the navbar.
 * @param {Array} [props.drawerItems=[]] - An array of maps (link, icon, text) representing items to be rendered in the drawer menu.
 * @returns {JSX.Element} - A JSX element representing the navigation bar.
 */
function NavBar(props) {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(!drawerState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer()}
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

      <Drawer open={drawerState} onClose={toggleDrawer()}>
        <Box
          sx={{ width: 250, overflow: "auto" }}
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}
        >
          <Toolbar />
          <List>
            {props.drawerItems?.map((item) => (
              <Link to={item.link || "#"} key={uuidv4()}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon || <QuestionMarkIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item.text || "Not given"} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  barItems: PropTypes.arrayOf(PropTypes.node),
  drawerItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.element,
      link: PropTypes.string,
    })
  ),
};

export default NavBar;
