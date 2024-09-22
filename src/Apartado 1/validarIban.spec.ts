import {
  isIbanFormatCorrect,
  getBankViaNumber,
  validateIban,
} from "./validateIban";

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

describe("validateIban", () => {
  it("inserts bank Iban, extrapolates bank name, branch, control number and account", () => {
    //Arrange

    let iban = "ES21 0061 0100 72 2030876293";

    //Act
    const result = validateIban(iban);

    //Assert
    const expected = {
      bank: "Banca March",
      branch: "0100",
      control: "72",
      account: "2030876293",
    };
    //     console.log("El banco es:", 'Banca March');
    //     console.log("El sucursal es:", '0100');
    //     console.log("Los digitos de control son:", '72');
    //     console.log("El número de cuenta es:", '2030876293');

    expect(result).toEqual(expected);
  });
});
