import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 36rem;
  min-width: 36rem;
  margin: 3rem auto;
`;

export const Input = styled.textarea`
  display: inline-block;
  width: 100%;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  border: none;
  resize: none;
  height: 100%;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:empty::before {
    content: 'Type what do you want';
    color: ${props => props.theme.colors.hint};
  }
`;
