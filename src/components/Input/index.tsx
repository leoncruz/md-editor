import React, { KeyboardEvent, useCallback } from 'react';

import { Container } from './styles';

interface Props {
  onChange: (newText: string) => void;
}

export const Input: React.FC<Props> = props => {
  const { onChange } = props;

  const handleChange = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        const value = event.currentTarget.textContent;
        onChange(value!);
      }
    },
    [onChange]
  );

  return (
    <Container
      contentEditable={true}
      onKeyPress={(event: KeyboardEvent<HTMLDivElement>) => handleChange(event)}
    />
  );
};
