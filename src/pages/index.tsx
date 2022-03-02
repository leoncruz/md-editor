import React from 'react';

import { EditorProvider } from '../contexts/EditorContext';

import { Editor } from '../components/Editor';
import { Preview } from '../components/Preview';
import { AppContainer } from './styles';

const Index: React.FC = () => {
  return (
    <EditorProvider>
      <AppContainer>
        <Editor />
        <Preview />
      </AppContainer>
    </EditorProvider>
  );
};

export default Index;
