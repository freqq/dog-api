import { useState, useEffect } from 'react';

import { AppContext } from 'appContext';

import Navbar from 'components/Navbar';
import BreedCounter from 'components/BreedCounter';
import DogsList from 'components/DogsList';
import DogModal from 'components/DogModal';
import Footer from 'components/Footer';

import GlobalStyle from 'globalStyles';
import useFetch from 'hooks/useFetch';

import { flattenDogsResponse } from 'utils/responseProcessing';
import { ALL_BREEDS_URL } from 'utils/urls';
import { Breed, DogResponse } from 'types';

const App = () => {
  const { data } = useFetch<DogResponse>(ALL_BREEDS_URL);
  const [flattenedBreeds, setFlattenedBreeds] = useState<Breed[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [chosenBreed, setChosenBreed] = useState<Breed | undefined>(undefined);

  useEffect(() => {
    if (data) setFlattenedBreeds(flattenDogsResponse(data));
  }, [data]);

  const onModalClose = () => setIsModal(false);

  const onModalOpen = (breed: Breed) => {
    setChosenBreed(breed);
    setIsModal(true);
  };

  return (
    <AppContext.Provider
      value={{ chosenBreed, flattenedBreeds, isModal, onModalClose, onModalOpen }}
    >
      <Navbar />
      <BreedCounter />
      <DogsList />
      {chosenBreed ? <DogModal /> : null}
      <Footer />
      <GlobalStyle />
    </AppContext.Provider>
  );
};

export default App;
