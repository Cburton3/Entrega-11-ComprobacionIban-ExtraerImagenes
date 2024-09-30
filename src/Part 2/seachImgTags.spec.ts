import { getAllImageURL } from "./motor";

describe("getAllImageURL", () => {
  it("inserts HTML and returns all url tags", () => {
    //Arrange

    let html = `
      <div class="card">
          <img src="http://localhost:3000/./mortadelo.webp" />
          <div class="container-description">
            <h2><span>Nombre: </span>Mortadelo</h2>
            <p><span>Especialidad: </span>Disfraces</p>
            <p>
              <span>Habilidades: </span>Camuflaje, Imitaciones, Huida rápida
            </p>
          </div>
        </div>
        <div class="card">
          <img src="http://localhost:3000/./filemon.webp" />
          <div class="container-description">
            <h2><span>Nombre: </span>Filemón</h2>
            <p><span>Especialidad: </span>Ingeniería improvisada</p>
            <p>
              <span>Habilidades: </span>Inventor, Construcción rápida, Cálculos
              mentales
            </p>
          </div>
        </div>
      `;

    //Act
    const result = getAllImageURL(html);

    //Assert
    const expected = [
      "http://localhost:3000/./mortadelo.webp",
      "http://localhost:3000/./filemon.webp",
    ];
    expect(result).toEqual(expected);
  });
});
