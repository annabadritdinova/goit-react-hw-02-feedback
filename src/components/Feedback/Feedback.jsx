import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export default function Feedback({
  options,
  onLeaveFeedback,
}) {
  return (
    <ul className={styles.list}>
      {options.map(option => (
        <li key={option}>
          <button
            onClick={() => onLeaveFeedback(option)}
            className={styles.button}
            name={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};




