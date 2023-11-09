import { Avatar } from "@mui/material";
import NavBar from "./NavBar";

function PageLayout() {
  const STANDARD_BAR_ITEMS = [<Avatar alt="Avatar" variant="circular" />];

  return (
    <div>
      <NavBar barItems={STANDARD_BAR_ITEMS} />
    </div>
  );
}

export default PageLayout;
