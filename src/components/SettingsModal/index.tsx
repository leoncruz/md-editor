import React, { useCallback } from 'react';
import { DefaultTheme } from 'styled-components';
import { useTheme } from '../../contexts/ThemeApp';
import { textColors } from '../../themes';

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
  const { setTheme } = useTheme();
  const { color1, color2, color3, color4 } = textColors;

  const onAnimationEnd = useCallback(() => {
    if (animationType === 'Out') {
      setVisible(false);
    }
  }, [setVisible, animationType]);

  const changeTextColor = useCallback(
    (color: string) => {
      setTheme((prevState: DefaultTheme) => {
        return {
          ...prevState,
          colors: {
            ...prevState.colors,
            text: color
          }
        };
      });
    },
    [setTheme]
  );

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
