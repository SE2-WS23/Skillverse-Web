import PropTypes from "prop-types";
import TrainingBlock from "./TrainingBlock";

/**
 * Renders a list item for a training block.
 * @param {Object} props - The component props.
 * @param {Object} props.training - The training block data.
 * @param {string} props.training.courseName - The name of the course.
 * @param {Array} props.training.skills - The skills covered in the course.
 * @param {string} props.training.description - The description of the course.
 * @param {number} props.training.progress - The progress of the course.
 * @returns {JSX.Element} - The rendered list item.
 */
function TrainingBlockListItem(props) {
  return (
    <li>
      <TrainingBlock
        courseName={props.training.courseName}
        skills={props.training.skills}
        description={props.training.description}
        progress={props.training.progress}
      />
    </li>
  );
}

TrainingBlockListItem.propTypes = {
  training: PropTypes.shape({
    courseName: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    status: PropTypes.number,
  }),
};

export default TrainingBlockListItem;
