import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0 };
  to {transform: opacity: 1 };
`;
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
  animation: ${FadeIn} 3s ease;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.hint};
  }
`;
