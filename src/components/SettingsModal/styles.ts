import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  isVisible?: boolean;
  animationType?: string;
}

const ZoomIn = keyframes`
  0% { transform: scale(0, 0) };
  80% { transform: scale(1.1, 1.1) };
  100% { transform: scale(1, 1) };
`;

const ZoomOut = keyframes`
  0% { transform: scale(1, 1) };
  20% { transform: scale(1.1, 1.1) };
  100% { transform: scale(0, 0) };
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 200px;
  height: 100px;
  margin-right: 10px;
  border-radius: 10px;

  background-color: ${props => props.theme.colors.accent};

  display: flex;
  align-items: center;
  flex-direction: column;

  animation: ${({ animationType }) =>
      animationType === 'In' ? ZoomIn : ZoomOut}
    0.3s ease-in;
`;

export const Title = styled.span`
  margin-top: 5px;
  font-size: 1.2rem;
`;

export const SettingsArea = styled.div`
  margin-top: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColorsArea = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const CircleColorLabel = styled.span`
  font-size: 0.9rem;
`;

export const CircleColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;

  background-color: red;
`;
