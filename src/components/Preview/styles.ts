import styled from 'styled-components';

export const Container = styled.div`
  max-width: 36rem;
  min-width: 36rem;
  margin: 3rem auto;
  font-size: 1.7rem;
  color: ${props => props.theme.colors.text};
`;
