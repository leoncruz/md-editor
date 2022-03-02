import { createContext } from 'react';

interface Props {
  markdownText: string;
  setMarkdownText: (value: string) => void;
}

export const EditorContext = createContext({} as Props);
