import { IMovie } from "./../ts/models/IMovie";
import * as functions from "./../ts/functions";

describe("movieSort", () => {
  test("should sort list in alphabetical order", () => {
    //Arrange
    let movies: IMovie[] = [
      {
        Title: "Will",
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
        Title: "Adam",
        Poster: "DHPoster",
        Type: "movie",
        imdbID: "32132122",
        Year: "1999",
      },
      {
        Title: "Zorro",
        Poster: "ZorroPoster",
        Type: "movie",
        imdbID: "32132124",
        Year: "1998",
      },
      {
        Title: "Zorro",
        Poster: "ZorroPoster",
        Type: "movie",
        imdbID: "32132124",
        Year: "1998",
      },
    ];
    //Act
    functions.movieSort(movies);

    //Assert
    expect(movies[0].Title).toEqual("Adam");
    expect(movies[4].Title).toEqual("Zorro");
  });

  test("should sort list in reverse alphabetical order", () => {
    //Arrange
    let movies: IMovie[] = [
      {
        Title: "Batman",
        Poster: "LotrPoster",
        Type: "movie",
        imdbID: "123421421",
        Year: "2000",
      },
      {
        Title: "Zorro",
        Poster: "BatmanPoster",
        Type: "movie",
        imdbID: "3213123",
        Year: "2006",
      },
      {
        Title: "Adam",
        Poster: "DHPoster",
        Type: "movie",
        imdbID: "32132122",
        Year: "1999",
      },
      {
        Title: "Zorro",
        Poster: "ZorroPoster",
        Type: "movie",
        imdbID: "32132124",
        Year: "1998",
      },
    ];
    //Act
    functions.movieSort(movies, false);

    //Assert
    expect(movies[0].Title).toEqual("Zorro");
  });
});
