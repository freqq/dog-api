import { createContext, useContext } from 'react';
import { Breed } from 'types';

export interface IAppContext {
  flattenedBreeds: Breed[];
  chosenBreed?: Breed;
  isModal: boolean;
  setChosenBreed: (breed: Breed) => void;
  setIsModal: (isModal: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  flattenedBreeds: [],
  chosenBreed: undefined,
  isModal: false,
  setChosenBreed: () => {},
  setIsModal: () => {},
});

export const useGlobalContext = () => useContext(AppContext);
