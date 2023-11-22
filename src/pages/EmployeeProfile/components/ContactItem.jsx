//imports
import { Stack, Typography, Box } from "@mui/material";
import "./style.css";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

export default function ContactItem({ contact }) {
  const theme = useTheme();

  return (
    <Box
      className="component"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      <h2>Contact</h2>
      <Stack
        direction="row"
        columnGap={8}
        sx={{ justifyContent: "center" }}
        className="contact"
      >
        <Typography variant="body1" component="a" href={"tel:" + contact.phone}>
          {contact.phone}
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href={"mailto:" + contact.email}
        >
          {contact.email}
        </Typography>
        <Typography variant="body1">{contact.address}</Typography>
      </Stack>
    </Box>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
  phone: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
};
