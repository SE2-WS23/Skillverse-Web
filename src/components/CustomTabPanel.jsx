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
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}
    >
      {props.value === props.index && <Box sx={{ p: 3 }}>{props.children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default CustomTabPanel;
