import React, { useContext, useState } from 'react';

import { EditorContext } from './context';

interface Props {
  children: React.ReactNode;
}

export const EditorProvider: React.FC<Props> = ({ children }) => {
  const [markdownText, setMarkdownText] = useState('');

  return (
    <EditorContext.Provider
      value={{
        markdownText,
        setMarkdownText
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useMarkdown = () => {
  const { markdownText, setMarkdownText } = useContext(EditorContext);

  return {
    markdownText,
    setMarkdownText
  };
};
