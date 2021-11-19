export const API_BASE_URL = 'https://dog.ceo/api';
export const ALL_BREEDS_URL = `${API_BASE_URL}/breeds/list/all`;
export const RANDOM_IMAGE_BY_BREED = (breedName: string) =>
  `${API_BASE_URL}/breed/${breedName}/images/random`;
