import React from 'react';

import { EditorProvider } from '../contexts/EditorContext';
import { Editor } from '../components/Editor';
import { Preview } from '../components/Preview';
import { Header } from '../components/Header';
import { AppContainer } from './styles';

const Index: React.FC = () => {
  return (
    <EditorProvider>
      <Header />
      <AppContainer>
        <Editor />
        <Preview />
      </AppContainer>
    </EditorProvider>
  );
};

export default Index;
