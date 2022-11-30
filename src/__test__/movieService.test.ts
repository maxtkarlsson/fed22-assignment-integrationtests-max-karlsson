import { IMovie } from "../ts/models/IMovie";
import { getData } from "../ts/services/movieService";

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

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => resolve({ data: { Search: mockMovies } }));
  },
}));

//jest.mock("./../ts/services/movieService.ts");

test("should get mock data", async () => {
  //Arrange
  let text = "test";
  //Act
  let response = await getData(text);
  //Assert
  expect(response.length).toBe(4);
});
