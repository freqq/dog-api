export const capitalizeString = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const getBreedName = (breed: string, subBreed?: string): string =>
  subBreed
    ? [capitalizeString(subBreed), capitalizeString(breed)].join(' ')
    : capitalizeString(breed);

export const getBreedURL = (breed: string, subBreed?: string): string =>
  subBreed ? `${breed}/${subBreed}` : breed;
