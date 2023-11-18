import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PageLayout from "../../components/PageLayout";
import ROUTES from "../../routes";

/**
 * Component that renders the home page with links to all other pages.
 * @returns {JSX.Element} The home page component.
 */
function HomePage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <List
        sx={{
          maxWidth: 900,
          m: "auto",
          p: "10px",
        }}
      >
        {ROUTES.map((route) => (
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ m: "10px 0" }}
            onClick={() => navigate(route.path)}
            key={uuidv4()}
          >
            {route.path.toUpperCase() || "HOME"}
          </Button>
        ))}
      </List>
    </PageLayout>
  );
}

export default HomePage;
