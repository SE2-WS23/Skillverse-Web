//imports
import { Stack, Typography, Box } from "@mui/material";
import "./style.css";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

export default function ContactItem(props) {
  const theme = useTheme();

  return (
    <Box
      className="form-component"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Contact
      </Typography>
      <Stack
        direction="row"
        columnGap={8}
        sx={{ justifyContent: "center", padding: "1%" }}
        className="contact"
      >
        <Typography
          variant="body1"
          component="a"
          href={"tel:" + props.contact.phone || ""}
        >
          {props.contact.phone || ""}
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href={"mailto:" + props.contact.email || ""}
        >
          {props.contact.email}
        </Typography>
        <Typography variant="body1">{props.contact.address || ""}</Typography>
      </Stack>
    </Box>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};
