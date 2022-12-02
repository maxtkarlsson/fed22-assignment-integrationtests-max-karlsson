import { IMovie } from "../ts/models/IMovie";
import { getData } from "../ts/services/movieService";

// Mockdata
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

// Mock axios.get so we get our testdata
/*
jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => resolve({ data: { Search: mockMovies } }));
  },
}));
//jest.mock("./../ts/services/movieService.ts");
*/

jest.mock("axios", () => ({
  get: async (searchText: string) => {
    let newSearchtext: string = searchText.substring(38);

    return new Promise((resolve, reject) => {
      if (newSearchtext.length > 3) {
        resolve({ data: { Search: mockMovies } });
      } else {
        reject({ data: [] });
      }
    });
  },
}));

describe("getData", () => {
  test("should get mock data", async () => {
    //Arrange
    let text = "test";
    //Act
    let response = await getData(text);
    //Assert
    expect(response.length).toBe(4);
  });

  test("should not get data", async () => {
    //Arrange
    let text = "te";
    //Act
    let response = await getData(text);
    //Assert
    expect(response.length).toBe(0);
  });
});
