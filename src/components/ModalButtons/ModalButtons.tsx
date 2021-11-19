import React from 'react';

import Button from 'components/Button';
import clearIcon from 'assets/close.svg';
import { ModalButtonsWrapper } from 'components/ModalButtons/ModalButtons.styles';

const ModalButtons: React.FC<Props> = ({ onClose, onRandom }) => (
  <ModalButtonsWrapper>
    <Button onClick={onRandom} text="Next random picture" />
    <Button onClick={onClose} icon={clearIcon} />
  </ModalButtonsWrapper>
);

interface Props {
  onClose: () => void;
  onRandom: () => void;
}

export default ModalButtons;
