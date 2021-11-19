import { useGlobalContext } from 'appContext';

import { BreedCounterWrapper } from 'components/BreedCounter/BreedCounter.styles';

const BreedCounter = () => {
  const { flattenedBreeds } = useGlobalContext();

  return <BreedCounterWrapper>Fetched breeds: {flattenedBreeds.length}</BreedCounterWrapper>;
};

export default BreedCounter;
