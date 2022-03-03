import React, { useCallback, useState } from 'react';
import { SettingsModal } from '../SettingsModal';
import { Container, SettingIcon } from './styles';

export const Header: React.FC = () => {
  const [settingsVisibility, setSettingsVisibility] = useState(false);
  const [modalAnimationType, setModalAnimationType] = useState('In');

  const openSettingsModal = useCallback(() => {
    setModalAnimationType('In');
    setSettingsVisibility(true);
  }, []);

  const closeSettingsModal = useCallback(() => {
    setModalAnimationType('Out');
  }, []);

  const handleClick = settingsVisibility
    ? closeSettingsModal
    : openSettingsModal;

  return (
    <Container>
      <SettingIcon onClick={handleClick} />
      <SettingsModal
        isVisible={settingsVisibility}
        setVisible={setSettingsVisibility}
        animationType={modalAnimationType}
      />
    </Container>
  );
};
