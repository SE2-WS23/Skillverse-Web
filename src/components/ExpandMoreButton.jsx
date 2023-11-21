import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * A styled IconButton component that displays an expand/collapse icon.
 * @param {Object} props - The props object of the component.
 * @param {boolean} props.expand - Whether the icon should be expanded or not.
 * @returns {JSX.Element} - The ExpandMoreButton component.
 */
const ExpandMoreButton = styled((props) => {
  const { expand, ...other } = props;
  return (
    <IconButton {...other}>
      <ExpandMoreIcon />
    </IconButton>
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default ExpandMoreButton;
