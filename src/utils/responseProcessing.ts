import { Breed, DogResponse } from 'types';
import { capitalizeString } from 'utils/string';

const getBreedName = (breed: string, subBreed?: string): string =>
  subBreed
    ? [capitalizeString(subBreed), capitalizeString(breed)].join(' ')
    : capitalizeString(breed);

const getBreedURL = (breed: string, subBreed?: string): string =>
  subBreed ? `${breed}/${subBreed}` : breed;

const generateNewBreed = (breed: string, subBreed?: string): Breed => ({
  name: getBreedName(breed, subBreed),
  url: getBreedURL(breed, subBreed),
});

export const flattenDogsResponse = (dogsResponse: DogResponse): Breed[] => {
  let returnArray: Breed[] = [];

  Object.keys(dogsResponse.message).forEach(breed => {
    const breedArray = dogsResponse.message[breed];

    if (breedArray.length > 0)
      breedArray.forEach((subBreed: string) => {
        returnArray.push(generateNewBreed(breed, subBreed));
      });
    else returnArray.push(generateNewBreed(breed));
  });

  return returnArray;
};
