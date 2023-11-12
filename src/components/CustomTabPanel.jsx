import { Box } from "@mui/material";
import PropTypes from "prop-types";

/**
 * A custom tab panel component.
 *
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The children to be rendered inside the tab panel.
 * @param {number} props.index - The index of the tab panel.
 * @param {number} props.value - The value of the tab panel.
 * @returns {JSX.Element} - The custom tab panel component.
 */
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default CustomTabPanel;
