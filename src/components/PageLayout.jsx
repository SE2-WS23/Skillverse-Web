import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./NavBar";

/**
 * Renders a page layout with a navigation bar and a body section.
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The children to be rendered in the body section.
 * @returns {JSX.Element} - The PageLayout component.
 */
function PageLayout(props) {
  const STANDARD_BAR_ITEMS = [
    <Avatar alt="Avatar" key={uuidv4()} variant="circular" />,
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
          barItems={props.navBarItems || STANDARD_BAR_ITEMS}
          drawerItems={props.navDrawerItems || STANDARD_DRAWER_ITEMS}
        />
      </header>
      <body>{props.children}</body>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
  navBarItems: PropTypes.arrayOf(PropTypes.node),
  navDrawerItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.element,
      link: PropTypes.string,
    })
  ),
};

export default PageLayout;
