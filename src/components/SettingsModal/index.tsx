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
          <CircleColor color={color1} onClick={() => changeTextColor(color1)} />
          <CircleColor color={color2} onClick={() => changeTextColor(color2)} />
          <CircleColor color={color3} onClick={() => changeTextColor(color3)} />
          <CircleColor color={color4} onClick={() => changeTextColor(color4)} />
        </ColorsArea>
      </SettingsArea>
    </Container>
  );
};
