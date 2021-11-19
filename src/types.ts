export interface DogResponse {
  status: string;
  message: DogBreed;
}

export interface DogImageResponse {
  status: string;
  message: string;
}

export interface DogBreed {
  [key: string]: string[];
}

export interface Breed {
  name: string;
  url: string;
}
