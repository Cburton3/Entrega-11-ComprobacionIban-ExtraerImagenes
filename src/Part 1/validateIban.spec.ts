import {
  isIbanFormatCorrect,
  getBankViaNumber,
} from "./validatiban";

beforeEach(() => {
  document.body.innerHTML = `
    <div id="message"></div>
    <div id="results"></div>
    <input id="input" type="text" />
    <button id="searchButton">Search</button>
  `;
});

describe("isIbanFormatCorrect", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],

    ["ES2114650100722030876293", true],

    ["ES21-1465-0100-72-2030876293", true],

    ["ES6621000418401234567891", true],

    ["ES21.1465.0100.72.2030876293", false],

    ["ES66210004184012345678918", false],
  ])(
    "Fx checks if IBAN is correctly formatted",
    (valor: string, expected: boolean) => {
      expect(isIbanFormatCorrect(valor)).toBe(expected);
    }
  );
});

describe("getBankViaNumber", () => {
  it("inserts code, gets corresponding bank from list", () => {
    //Arrange

    let codigo = "0061";
    //const codigoBanco: string = bancos.numero

    //Act
    const result = getBankViaNumber(codigo);

    //Assert
    const expected = "Banca March";
    expect(result).toBe(expected);
  });
});

// describe("validateIban", () => {
//   it("inserts bank Iban, extrapolates bank name, branch, control number and account", () => {
//     //Arrange

//     let iban = "ES21 0061 0100 72 2030876293";

//     //Act
//     const result = validateIban(iban);

//     //Assert
//     const expected = {
//       bank: "Banca March",
//       branch: "0100",
//       control: "72",
//       account: "2030876293",
//     };

//     expect(result).toEqual(expected);
//   });

//   it("should manipulate the DOM and display the result", () => {
//     // Arrange
//     const iban = "ES21 0061 0100 72 2030876293";
//     const inputField = document.getElementById("input") as HTMLInputElement;
//     const resultsContainer = document.getElementById("results");

//     inputField.value = iban;

//     // Act
//     validateIban(iban);

//     // Assert
//     expect(resultsContainer?.innerHTML).toContain("The IBan is valid");
//     expect(resultsContainer?.innerHTML).toContain("BanK: Banca March");
//   });
// });
