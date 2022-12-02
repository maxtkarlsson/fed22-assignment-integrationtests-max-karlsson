import { IMovie } from "../../models/IMovie";

let mockMovies: IMovie[] = [
  {
    Title: "Lotr",
    Poster: "LotrPoster",
    Type: "movie",
    imdbID: "123421421",
    Year: "2000",
  },
  {
    Title: "Batman",
    Poster: "BatmanPoster",
    Type: "movie",
    imdbID: "3213123",
    Year: "2006",
  },
  {
    Title: "Die Hard",
    Poster: "DHPoster",
    Type: "movie",
    imdbID: "32132122",
    Year: "1999",
  },
  {
    Title: "Harry Potter",
    Poster: "HarryPoster",
    Type: "movie",
    imdbID: "432432",
    Year: "2002",
  },
];

/*
export async function getData(): Promise<IMovie[]> {
  return new Promise((resolve) => {
    resolve(mockMovies);
  });
}
*/

export async function getData(searchText: string): Promise<IMovie[]> {
  return new Promise((resolve, reject) => {
    if (searchText.length !== 0) {
      if (searchText.length > 3) {
        resolve(mockMovies);
      } else {
        resolve([]);
      }
    } else {
      reject([]);
    }
  });
}
