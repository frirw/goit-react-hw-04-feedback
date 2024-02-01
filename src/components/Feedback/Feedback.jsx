import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ options, leaveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map(option => (
        <li key={option} className={css.option}>
          <button
            className={css.buttonFeedback}
            onClick={() => leaveFeedback(option)}
            type="button"
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
