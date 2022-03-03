import React, { useCallback } from 'react';

import {
  Container,
  SettingsArea,
  ColorsArea,
  CircleColorLabel,
  CircleColor
} from './styles';

interface Props {
  isVisible: boolean;
  setVisible: (newValue: boolean) => void;
  animationType: string;
}

export const SettingsModal: React.FC<Props> = ({
  animationType,
  isVisible,
  setVisible
}) => {
  const onAnimationEnd = useCallback(() => {
    if (animationType === 'Out') {
      setVisible(false);
    }
  }, [setVisible, animationType]);

  if (!isVisible) return <></>;

  return (
    <Container
      animationType={animationType}
      onAnimationEnd={onAnimationEnd}
      isVisible={isVisible}
    >
      <SettingsArea>
        <CircleColorLabel>Text Color</CircleColorLabel>
        <ColorsArea>
          <CircleColor />
          <CircleColor />
          <CircleColor />
          <CircleColor />
        </ColorsArea>
      </SettingsArea>
    </Container>
  );
};
