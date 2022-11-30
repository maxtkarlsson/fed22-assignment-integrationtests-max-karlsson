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
  /*
  test("should not sort list", () => {
    //Arrange
    let movies: IMovie[] = [
      {
        Title: "Bermuda",
        Poster: "LotrPoster",
        Type: "movie",
        imdbID: "123421421",
        Year: "2000",
      },
      {
        Title: "Bermuda",
        Poster: "BatmanPoster",
        Type: "movie",
        imdbID: "3213123",
        Year: "2006",
      },
      {
        Title: "Bermuda",
        Poster: "DHPoster",
        Type: "movie",
        imdbID: "32132122",
        Year: "1999",
      },
    ];
    //Act
    functions.movieSort(movies);

    //Assert
    expect(movies[0].Year).toEqual("2000");
    expect(movies[1].Year).toEqual("2006");
    expect(movies[2].Year).toEqual("1999");
  });*/

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
