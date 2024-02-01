import React from 'react';
import styled from 'styled-components';

const FeedbackList = styled.ul`
  display: block;
`;

const Option = styled.li`
  display: inline;
  margin-right: 10px;
`;

const ButtonFeedback = styled.button`
  background-color: lightpink;
  border-color: plum;
  border-radius: 5px;
  box-shadow: 2px 2px 4px lightcoral;
  width: 100px;
`;

const Feedback = ({ options, leaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <Option key={option}>
          <ButtonFeedback onClick={() => leaveFeedback(option)} type="button">
            {option}
          </ButtonFeedback>
        </Option>
      ))}
    </FeedbackList>
  );
};

export default Feedback;
