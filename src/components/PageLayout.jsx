import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./NavBar";

/**
 * Renders a page layout with a navigation bar and a body section.
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The children to be rendered in the body section.
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
      <main>{props.children}</main>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
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
