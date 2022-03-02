import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkReact from 'remark-react';
import remarkBreaks from 'remark-breaks';

import { useMarkdown } from '../../contexts/EditorContext';
import { Container } from './styles';

export const Preview: React.FC = () => {
  const { markdownText } = useMarkdown();

  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkReact, React)
    .processSync(markdownText).result;

  return <Container>{md}</Container>;
};
