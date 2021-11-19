import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 8px 15px;
  border-radius: 4px;
  outline: none;
  background: none;
  border: 1px solid #bbb;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const ButtonText = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const ButtonIcon = styled.img`
  height: 12px;
  width: 12px;
`;
