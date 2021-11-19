import React from 'react';

import { ButtonWrapper, ButtonText, ButtonIcon } from 'components/Button/Button.styles';

const Button: React.FC<Props> = ({ text, icon, onClick }: Props) => {
  const chooseContent = () => {
    if (text) return <ButtonText>{text}</ButtonText>;
    if (icon) return <ButtonIcon src={icon} alt="button-icon" />;
    return null;
  };

  return <ButtonWrapper onClick={onClick}>{chooseContent()}</ButtonWrapper>;
};

Button.defaultProps = {
  text: undefined,
  icon: undefined,
};

interface Props {
  text?: string;
  icon?: string;
  onClick: () => void;
}

export default Button;
