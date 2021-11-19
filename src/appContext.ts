import { createContext, useContext } from 'react';
import { Breed } from 'types';

export interface IAppContext {
  flattenedBreeds: Breed[];
  chosenBreed?: Breed;
  isModal: boolean;
  onModalOpen: (breed: Breed) => void;
  onModalClose: () => void;
}

export const AppContext = createContext<IAppContext>({
  flattenedBreeds: [],
  chosenBreed: undefined,
  isModal: false,
  onModalOpen: (breed: Breed) => {},
  onModalClose: () => {},
});

export const useGlobalContext = () => useContext(AppContext);
