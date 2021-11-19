import styled from 'styled-components';

export const DogsListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 20px 20px 20px;

  button {
    height: 100px;

    &:hover {
      transform: scale(1.03);
    }
  }
`;
