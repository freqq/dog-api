import Button from 'components/Button';

import { Breed } from 'types';
import { DogsListWrapper } from 'components/DogsList/DogsList.styles';
import { useGlobalContext } from 'appContext';

const DogsList = () => {
  const { flattenedBreeds, onModalOpen } = useGlobalContext();

  return (
    <DogsListWrapper>
      {flattenedBreeds.map((breed: Breed) => (
        <Button key={breed.name} text={breed.name} onClick={() => onModalOpen(breed)} />
      ))}
    </DogsListWrapper>
  );
};

export default DogsList;
