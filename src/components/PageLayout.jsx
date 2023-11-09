import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./NavBar";

function PageLayout() {
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
    <div>
      <NavBar
        barItems={STANDARD_BAR_ITEMS}
        drawerItems={STANDARD_DRAWER_ITEMS}
      />
    </div>
  );
}

export default PageLayout;
