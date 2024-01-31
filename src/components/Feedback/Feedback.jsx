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

function Feedback({ options, leaveFeedback }) {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <Option key={option}>
            <ButtonFeedback name={option} onClick={leaveFeedback} type="button">
              {option}
            </ButtonFeedback>
          </Option>
        );
      })}
    </FeedbackList>
  );
}

export default Feedback;
