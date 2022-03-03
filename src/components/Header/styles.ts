import { MdSettings } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px 20px 0 0;
  right: 10px;
  position: fixed;
`;

export const SettingIcon = styled(MdSettings)`
  color: ${props => props.theme.colors.accent};
  font-size: 30px;
  cursor: pointer;
`;
