/**
 * @jest-environment jsdom
 */
import { IMovie } from "../ts/models/IMovie";
import * as functions from "./../ts/movieApp";
import * as functionsServices from "./../ts/services/movieService";
jest.mock("./../ts/services/movieService.ts");

describe("init", () => {
  test("should call handleSubmit if clicked", () => {
    //Arrange
    document.body.innerHTML = `
    <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>`;
    let spy = jest.spyOn(functions, "handleSubmit").mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve();
        })
    );
    //Act
    functions.init();
    document.getElementById("search")?.click();

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

/*
describe("handleSubmit", () => {
  test("should", () => {

  });
});
*/

describe("createHtml", () => {
  test("should create html from a list and add class", async () => {
    //Arrange
    let text = "text";
    let movies: IMovie[] = await functionsServices.getData(text);
    document.body.innerHTML = `
    <div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    //Act
    functions.createHtml(movies, container);
    //Assert
    expect(document.querySelectorAll("h3").length).toBe(4);
    expect(document.querySelectorAll("h3")[0].innerHTML).toContain("Lotr");
    expect(document.querySelectorAll("img").length).toBe(4);
    expect(document.querySelectorAll("div.movie").length).toBe(4);
  });
});

describe("displayNoResult", () => {
  test("should create html with text", () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    //Act
    functions.displayNoResult(container);

    //Assert
    expect(document.querySelectorAll("p").length).toBe(1);
  });
});
