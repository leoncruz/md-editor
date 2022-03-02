import React, { ChangeEvent, useEffect, useRef } from 'react';
import { useMarkdown } from '../../contexts/EditorContext';

import { Container, Input } from './styles';

export const Editor: React.FC = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { markdownText, setMarkdownText } = useMarkdown();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;

    setMarkdownText(text!);
  };
  return (
    <Container>
      <Input
        onInput={handleOnChange}
        placeholder="Type what do you want..."
        value={markdownText}
        ref={ref}
      />
    </Container>
  );
};
