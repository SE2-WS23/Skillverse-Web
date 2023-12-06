import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./NavBar";

/**
 * Renders a page layout with a navigation bar, a drawer, and a main content area.
 * @param {Object} props - The props object.
 * @param {string} [props.title="Page Title"] - The title of the page.
 * @param {Array} [props.navBarItems] - An array of React elements to be displayed in the navigation bar.
 * @param {Array} [props.navDrawerItems] - An array of objects representing the items to be displayed in the drawer. Each object should have a `text` property for the item text, a `link` property for the item link, and an `icon` property for the item icon.
 * @param {boolean} [props.viewportPage=false] - A boolean indicating whether the page should take up the full viewport height.
 * @returns {JSX.Element} - The PageLayout component.
 */
function PageLayout(props) {
  const navigate = useNavigate();
  const STANDARD_BAR_ITEMS = [
    <Avatar
      alt="Avatar"
      key={uuidv4()}
      variant="circular"
      onClick={() => navigate("#")}
    />,
  ];

  const STANDARD_DRAWER_ITEMS = [
    {
      text: "Home",
      link: "/",
      icon: <HomeIcon />,
    },
  ];

  return (
    <>
      <header>
        <NavBar
          title={props.title || "Page Title"}
          barItems={props.navBarItems || STANDARD_BAR_ITEMS}
          drawerItems={props.navDrawerItems || STANDARD_DRAWER_ITEMS}
        />
      </header>
      <Toolbar />
      <main style={props.style}>
        {props.viewportPage ? (
          <Box
            sx={{
              height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
            }}
          >
            {props.children}
          </Box>
        ) : (
          props.children
        )}
      </main>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  viewportPage: PropTypes.bool,
  navBarItems: PropTypes.arrayOf(PropTypes.node),
  navDrawerItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.element,
      link: PropTypes.string,
    })
  ),
  style: PropTypes.object,
};

export default PageLayout;
