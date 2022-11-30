/**
 * @jest-environment jsdom
 */
import * as functions from "./../ts/movieApp";

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
