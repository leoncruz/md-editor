import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 1.7rem;
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none;
  }

  &:empty::before {
    content: 'Type what do you want';
    color: ${props => props.theme.colors.hint};
  }
`;
