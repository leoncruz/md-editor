import React, { useCallback, useState } from 'react';
import { Input } from '../components/Input';

const Index: React.FC = () => {
  const initialValue = '';
  const [text, setText] = useState(initialValue);

  const handleChangeText = useCallback((newText: string) => {
    setText(newText);
  }, []);

  return (
    <div>
      <Input onChange={handleChangeText} />
    </div>
  );
};

export default Index;
