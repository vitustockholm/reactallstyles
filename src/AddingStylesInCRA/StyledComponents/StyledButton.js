import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 15px;
  border: 0;

  background-color: ${({ primary, secondary }) =>
    primary ? 'black' : secondary ? 'white' : 'green'};
  color: ${({ primary, secondary }) =>
    primary ? 'white' : secondary ? 'blasck' : 'white'};
`;

const StyledButton = ({ text, action, primary, secondary }) => {
  return (
    <Button onClick={action} primary={primary} secondary={secondary}>
      {text}
    </Button>
  );
};

export default StyledButton;
