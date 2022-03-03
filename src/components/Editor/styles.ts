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
  background-color: ${props => props.theme.colors.bg};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.hint};
  }
`;
